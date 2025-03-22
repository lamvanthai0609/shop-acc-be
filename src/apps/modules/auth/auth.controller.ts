import { Request, Response } from 'express';
import { LoginRequest, LoginResponse, RegisterRequest } from './auth.interface';
import { AuthService } from './auth.service';
import { ResponseApp } from '@/libs/utils/response';
import { IAppError } from '@/libs/utils/error';

class AuthController {
    private authService: AuthService;
    constructor() {
        this.authService = new AuthService();
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
        this.changePassword = this.changePassword.bind(this);
    }

    public async login(
        req: Request<{}, {}, LoginRequest>,
        res: Response<LoginResponse>
    ) {
        try {
            const payload = req.body;
            const data = await this.authService.login(payload);
            ResponseApp.ok(res, data);
        } catch (error) {
            ResponseApp.failed(res, error as IAppError);
        }
    }

    public async register(
        req: Request<RegisterRequest>,
        res: Response<LoginResponse>
    ) {
        try {
            const payload = req.body;
            const data = await this.authService.register(payload);
            ResponseApp.ok(res, data);
        } catch (error) {
            ResponseApp.failed(res, error as IAppError);
        }
    }

    public async changePassword(req: Request, res: Response) {
        try {
            const payload = req.body;
            const userId = req.params.userId;
            const data = await this.authService.changePassword(
                Number(userId),
                payload
            );
            ResponseApp.ok(res, data);
        } catch (error) {
            ResponseApp.failed(res, error as IAppError);
        }
    }
}

export const authController = new AuthController();
