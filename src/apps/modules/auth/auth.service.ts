import { UserService, UserStatus } from '../user';
import {
    LoginSessionExpired,
    PasswordRequired,
    UsernameAndPasswordIncorrect,
    UsernameRequired,
} from './auth.error';
import {
    ChangePasswordRequest,
    LoginRequest,
    LoginResponse,
    RegisterRequest,
    TokenPayload,
} from './auth.interface';
import jwt, { JwtPayload } from 'jsonwebtoken';
import crypto from 'crypto';
import { AppError } from '@/libs/utils/error';

export class AuthService {
    private readonly userService: UserService;
    private readonly accessTokenKey: string =
        process.env.ACCESS_TOKEN_KEY || 'shop-acc-token';
    private readonly accessTokenExpiresIn: string = '1d';
    constructor() {
        this.userService = new UserService();
        this.accessTokenKey = process.env.ACCESS_TOKEN_KEY ?? 'shop-acc-token';
    }

    private token(payload: TokenPayload): string {
        const accessToken = jwt.sign(
            payload,
            this.accessTokenKey as any,
            {
                expiresIn: this.accessTokenExpiresIn,
            } as any
        );
        return accessToken;
    }

    private hash = (password: string) => {
        return crypto.createHash('md5').update(password).digest('hex');
    };

    public async verifyToken(
        token: string
    ): Promise<TokenPayload & JwtPayload> {
        try {
            const data = jwt.verify(token, this.accessTokenKey);
            return data as TokenPayload & JwtPayload;
        } catch {
            throw new LoginSessionExpired();
        }
    }

    public async login(payload: LoginRequest): Promise<LoginResponse> {
        const { username, password } = payload;

        if (!username) {
            throw new UsernameRequired();
        }

        if (!password) {
            throw new PasswordRequired();
        }

        const passwordHash = this.hash(password);

        const user = await this.userService.findOneByFields({
            username,
            password: passwordHash,
        });
        if (!user) {
            throw new UsernameAndPasswordIncorrect();
        }
        const { password: _, role, ...userWithoutPassword } = user;

        if (userWithoutPassword.status === UserStatus.INACTIVE) {
            throw new AppError(
                'Tài khoản đã bị khóa vui lòng liên hệ admin để biết thêm chi tiết',
                400
            );
        }
        const encryptedObject: TokenPayload = {
            id: userWithoutPassword.id,
            username: userWithoutPassword.username,
            role: role,
        };
        const accessToken = await this.token(encryptedObject);

        return {
            user: {
                ...userWithoutPassword,
                role,
            },
            token: {
                accessToken,
            },
        };
    }

    public async register(payload: RegisterRequest) {
        const { username, password, email, name, numberPhone } = payload;

        if (!username || !password || !email || !name || !numberPhone) {
            throw new AppError('Thiếu thông tin', 400);
        }

        const passwordHash = this.hash(password);

        const user = await this.userService.findOneByFields(
            {
                username,
                email,
            },
            'OR'
        );

        if (user) {
            throw new AppError('Tài khoản hoặc email đã tồn tại', 400);
        }

        const id = await this.userService.save({
            ...payload,
            password: passwordHash,
        });

        const userCreated = await this.userService.findById(id);
        if (!userCreated) {
            throw new AppError('Tạo tài khoản thất bại', 500);
        }

        const { password: _, role, ...userWithoutPassword } = userCreated;
        const encryptedObject: TokenPayload = {
            id: userWithoutPassword.id,
            username: userWithoutPassword.username,
            role: role,
        };
        const accessToken = await this.token(encryptedObject);

        return {
            user: {
                ...userWithoutPassword,
                role,
            },
            token: {
                accessToken,
            },
        };
    }

    public async changePassword(
        userId: number,
        payload: ChangePasswordRequest
    ) {
        const { oldPassword, newPassword } = payload;

        if (userId !== payload.userId) {
            throw new AppError(
                'Không thể thay đổi mật khẩu của người khác',
                400
            );
        }

        if (!oldPassword || !newPassword) {
            throw new AppError('Thiếu thông tin', 400);
        }

        const user = await this.userService.findById(userId);

        if (!user) {
            throw new AppError('Tài khoản không tồn tại', 400);
        }

        const oldPasswordHash = this.hash(oldPassword);
        if (oldPasswordHash !== user.password) {
            throw new AppError('Mật khẩu cũ không đúng', 400);
        }

        const newPasswordHash = this.hash(newPassword);

        return await this.userService.updatePassword(userId, newPasswordHash);
    }
}
