import { Table } from '@/libs/utils/constant';
import {
    NextFunction,
    Request,
    RequestHandler,
    Response,
    Router,
} from 'express';
import express from 'express';
import {
    accountGeneralInfoController,
    AccountGeneralInfoController,
    AccountSpecificInfoController,
    categoryController,
    CategoryController,
    ImageController,
    rechargeController,
    RechargeController,
    rechargeMiddleware,
    serviceController,
    ServiceController,
    transactionController,
    TransactionController,
    userController,
    UserController,
} from './modules';
import { authController } from './modules/auth/auth.controller';
import { authMiddleware } from './middlewares';

const router = express.Router();

const authenticate = (req: Request, res: Response, next: NextFunction) => {
    authMiddleware.authenticate(req, res, next);
};

const authorize = (req: Request, res: Response, next: NextFunction) => {
    authMiddleware.authorize(req, res, next);
};

router.get(
    '/account/:slug',
    accountGeneralInfoController.getAccountByCategorySlug
);
router.get('/account/detail/:id', accountGeneralInfoController.findById);
router.get('/categories', categoryController.find);
router.get('/services', serviceController.find);

router.post('/auth/login', authController.login);
router.post('/auth/register', authController.register);
router.post(
    '/user/buy-account',
    authenticate,
    transactionController.postBuyAccount as unknown as RequestHandler
);

router.patch(
    '/auth/change-password',
    authenticate,
    authController.changePassword
);

router.get('/user/transaction', authenticate, transactionController.findByUser);
router.get('/user', authenticate, userController.findById);

router.get(
    '/admin/accounts',
    authenticate,
    authorize,
    accountGeneralInfoController.getAccounts
);

router.post(
    '/admin/accounts',
    authenticate,
    authorize,
    accountGeneralInfoController.save
);

router.patch(
    '/admin/accounts/:accountId',
    authenticate,
    authorize,
    accountGeneralInfoController.updateData
);

router.delete(
    '/admin/accounts/:accountId',
    authenticate,
    authorize,
    accountGeneralInfoController.delete
);

router.post(
    '/user/recharge',
    authenticate,
    rechargeMiddleware.authenticate,
    rechargeController.save
);

router.patch(
    '/admin/recharge/:rechargeId',
    authenticate,
    authorize,
    rechargeController.updateStatus
);

router.get('/user/recharge', authenticate, rechargeController.findByUser);
router.get('/admin/recharge', authenticate, authorize, rechargeController.find);

router.get('/admin/users', authenticate, authorize, userController.find);

router.post(
    '/admin/recharge',
    authenticate,
    rechargeMiddleware.authenticate,
    rechargeController.save
);

export const routers = (app: Router) => {
    app.use('/api', router);
};
