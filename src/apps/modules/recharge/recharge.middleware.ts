import { NextFunction, Request, Response } from 'express';
import { RechargeRequest } from './recharge.interface';
import { AppError, IAppError } from '@/libs/utils/error';
import { RechargeMethod } from './recharge.entity';
import { AuthMiddleware, authMiddleware } from '@/apps/middlewares';
import { ResponseApp } from '@/libs/utils/response';

export class RechargeMiddleware {
    private authMiddleware: AuthMiddleware;

    constructor() {
        this.authMiddleware = new AuthMiddleware();
        this.authenticate = this.authenticate.bind(this);
    }

    public authenticate(
        req: Request<{ userId: string }, any, RechargeRequest>,
        res: Response,
        next: NextFunction
    ) {
        try {
            const { userId } = req.params;
            if (!userId) {
                throw new AppError('Sai thông tin', 400);
            }
            if (Number(req.body.userId) !== Number(userId)) {
                throw new AppError('Sai thông tin', 400);
            }

            if (req.body.method === RechargeMethod.ATM) {
                this.authMiddleware.authorize(req, res, next);
                return;
            }
            next();
        } catch (error) {
            ResponseApp.failed(res, error as IAppError, 400);
        }
    }
}

export const rechargeMiddleware = new RechargeMiddleware();
