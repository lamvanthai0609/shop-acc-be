import { Table } from '@/libs/utils/constant';
import { NextFunction, Request, Response, Router } from 'express';
import express from 'express';
import {
    AccountGeneralInfoController,
    AccountSpecificInfoController,
    CategoryController,
    ImageController,
    RechargeController,
    ServiceController,
    TransactionController,
    userController,
    UserController,
} from './modules';
import { authController } from './modules/auth/auth.controller';
import { authMiddleware } from './middlewares';

const router = express.Router();

type Controller =
    | UserController
    | CategoryController
    | AccountGeneralInfoController
    | AccountSpecificInfoController
    | ImageController
    | RechargeController
    | TransactionController
    | ServiceController;

const controller: Record<Table, Controller | null> = {
    [Table.USER]: new UserController(),
    [Table.CATEGORY]: new CategoryController(),
    [Table.ACCOUNT_GENERAL_INFORMATION]: new AccountGeneralInfoController(),
    [Table.ACCOUNT_SPECIFIC_INFORMATION]: null,
    [Table.IMAGE]: null,
    [Table.RECHARGE]: new RechargeController(),
    [Table.TRANSACTION]: new TransactionController(),
    [Table.SERVICE]: new ServiceController(),
};

const listTableAuthenticate = [
    Table.USER,
    Table.RECHARGE,
    Table.TRANSACTION,
    Table.SERVICE,
];

// const renderRoute = (table: Table) => {
//     if (!Boolean(controller[table])) {
//         return;
//     }

//     const find = (req: Request, res: Response, next: NextFunction) =>
//         controller[table]?.find(req, res);

//     const findById = (req: Request, res: Response, next: NextFunction) =>
//         controller[table]?.findById(req, res);

//     const save = (req: Request, res: Response, next: NextFunction) =>
//         controller[table]?.save(req, res);

//     const update = (req: Request, res: Response, next: NextFunction) =>
//         controller[table]?.update(req, res);

//     const deleteFn = (req: Request, res: Response, next: NextFunction) =>
//         controller[table]?.delete(req, res);

//     if (listTableAuthenticate.includes(table)) {
//         const authenticate = (
//             req: Request,
//             res: Response,
//             next: NextFunction
//         ) => {
//             authMiddleware.authenticate(req, res, next);
//         };

//         const authorize = (req: Request, res: Response, next: NextFunction) => {
//             authMiddleware.authorize(req, res, next);
//         };

//         if (table === Table.USER) {
//             router.get(`/${table}`, authenticate, authorize, find);
//         } else {
//             router.get(`/${table}`, authenticate, find);
//         }

//         router.get(`/${table}/:id`, authenticate, findById);
//         router.post(`/${table}`, authenticate, save);
//         router.put(`/${table}/:id`, update);
//         router.delete(`/${table}/:id`, authenticate, authorize, deleteFn);
//         return;
//     }
//     router.get(`/${table}`, find);
//     router.get(`/${table}/:id`, findById);
//     router.post(`/${table}`, save);
//     router.put(`/${table}/:id`, update);
//     router.delete(`/${table}/:id`, deleteFn);
// };

// Object.values(Table).forEach((table) => {
//     renderRoute(table);
// });

//auth

router.post('/auth/login', authController.login);
router.post('/auth/register', authController.register);

const authenticate = (req: Request, res: Response, next: NextFunction) => {
    authMiddleware.authenticate(req, res, next);
};

const authorize = (req: Request, res: Response, next: NextFunction) => {
    authMiddleware.authorize(req, res, next);
};

router.get('/user', authenticate, userController.findById);

export const routers = (app: Router) => {
    app.use('/api', router);
};
