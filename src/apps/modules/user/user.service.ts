import { GeneralService } from '../general';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { User } from './user.entity';
import { UserStatus } from './user.enum';
import { UserModel } from './user.model';

export class UserService extends GeneralService<User> {
    private userModel: UserModel;

    constructor() {
        const userModel = new UserModel();
        super(userModel);
        this.userModel = userModel;
    }

    async save(data: Partial<User>): Promise<number> {
        const userDTO = new CreateUserDto(data);
        return super.save(userDTO);
    }

    async update(id: number, data: Partial<User>): Promise<boolean> {
        const userDTO = new UpdateUserDto(data);
        return super.update(id, userDTO);
    }

    async updateBalance(id: number, balance: number): Promise<boolean> {
        return await this.userModel.updateBalance(id, balance);
    }

    async updatePassword(id: number, password: string): Promise<boolean> {
        return await super.update(id, {
            password: password,
        });
    }

    async changeStatus(id: number, status: UserStatus): Promise<boolean> {
        if (!Object.values(UserStatus).includes(status)) {
            throw new Error('Invalid status value');
        }

        const user = await this.userModel.findById(id);
        if (!user) {
            throw new Error('User not found');
        }

        return await super.update(id, {
            status: status,
        });
    }
}
