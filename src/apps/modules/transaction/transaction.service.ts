import { GeneralService } from '../general';
import { Transaction } from './transaction.entity';
import { TransactionModel } from './transaction.model';

export class TransactionService extends GeneralService<Transaction> {
    constructor() {
        super(new TransactionModel());
    }
}
