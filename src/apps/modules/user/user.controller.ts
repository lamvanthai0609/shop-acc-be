import { Request, Response } from 'express';
import { GeneralController } from '../general';
import { User } from './user.entity';
import { UserService } from './user.service';

export class UserController extends GeneralController<User> {
    constructor() {
        super(new UserService());
    }
}

export const userController = new UserController();
