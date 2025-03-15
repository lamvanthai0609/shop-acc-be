import { Request, Response } from 'express';
import { GeneralController } from '../general';
import { Transaction } from './transaction.entity';
import { TransactionService } from './transaction.service';
import { ResponseApp } from '@/libs/utils/response';
import { IAppError } from '@/libs/utils/error';
import { BuyAccountRequest } from './transaction.interface';

export class TransactionController extends GeneralController<Transaction> {
    private transactionService: TransactionService;
    constructor() {
        const transactionService = new TransactionService();
        super(transactionService);
        this.transactionService = transactionService;
        this.postBuyAccount = this.postBuyAccount.bind(this);
    }

    public async postBuyAccount(
        req: Request<
            {
                id: string;
            },
            {},
            BuyAccountRequest
        >,
        res: Response
    ) {
        try {
            const params = req.params;
            const dataBody = req.body;

            if (Number(params?.id || 0) !== dataBody.userId) {
                throw new Error('Unauthorized');
            }

            const data = await this.transactionService.buyAccount(dataBody);
            ResponseApp.ok(res, data);
        } catch (error) {
            ResponseApp.failed(res, error as IAppError);
        }
    }
}

export const transactionController = new TransactionController();
