import { GeneralController } from '../general';
import { Transaction } from './transaction.entity';
import { TransactionService } from './transaction.service';

export class TransactionController extends GeneralController<Transaction> {
    constructor() {
        super(new TransactionService());
    }
}
