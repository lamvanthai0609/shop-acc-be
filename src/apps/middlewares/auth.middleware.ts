import { NextFunction, Request, Response } from 'express';
import { AuthService } from '../modules/auth/auth.service';
import { ResponseApp } from '@/libs/utils/response';
import { Forbidden, IAppError, Unauthorized } from '@/libs/utils/error';
import { Role } from '../modules';

export class AuthMiddleware {
    private authService: AuthService;
    constructor() {
        this.authService = new AuthService();
        this.authService.verifyToken = this.authService.verifyToken.bind(
            this.authService
        );
    }

    public async authenticate(req: Request, res: Response, next: NextFunction) {
        try {
            const token = req.header('Authorization');
            if (!token) {
                return ResponseApp.failed(res, new Unauthorized());
            }

            const [_, tokenData] = token.split(' ');
            const decodeTokenData = await this.authService.verifyToken(
                tokenData
            );
            req.params.userId = decodeTokenData.id.toString();
            next();
        } catch (error) {
            ResponseApp.failed(res, error as IAppError, 401);
        }
    }

    public async authorize(req: Request, res: Response, next: NextFunction) {
        try {
            const token = req.header('Authorization');
            if (!token) {
                return ResponseApp.failed(res, new Unauthorized());
            }

            const [_, tokenData] = token.split(' ');
            const decodeTokenData = await this.authService.verifyToken(
                tokenData
            );
            if (decodeTokenData.role !== Role.ADMIN) {
                return ResponseApp.failed(res, new Forbidden());
            }

            next();
        } catch (error) {
            ResponseApp.failed(res, error as IAppError, 401);
        }
    }
}

export const authMiddleware = new AuthMiddleware();
