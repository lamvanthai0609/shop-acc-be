import { Request, Response } from 'express';
import { GeneralController } from '../general';
import { User } from './user.entity';
import { UserService } from './user.service';
import { ResponseApp } from '@/libs/utils/response';
import { IAppError } from '@/libs/utils/error';

export class UserController extends GeneralController<User> {
    private userService: UserService;
    constructor() {
        const userService = new UserService();
        super(userService);
        this.userService = userService;
        this.findById = this.findById.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
    }

    async findById(req: Request, res: Response) {
        try {
            const id = req.params.userId;
            const user = await this.userService.findById(Number(id));
            ResponseApp.ok(res, user);
        } catch (error) {
            ResponseApp.failed(res, error as IAppError);
        }
    }

    async changeStatus(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const status = req.body.status;
            const user = await this.userService.changeStatus(
                Number(id),
                status
            );
            ResponseApp.ok(res, user);
        } catch (error) {
            ResponseApp.failed(res, error as IAppError);
        }
    }
}

export const userController = new UserController();
