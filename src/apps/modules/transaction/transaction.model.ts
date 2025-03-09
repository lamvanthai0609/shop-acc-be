import { Table } from '@/libs/utils/constant';
import { GeneralModel } from '../general';
import { Transaction } from './transaction.entity';

export class TransactionModel extends GeneralModel<Transaction> {
    constructor() {
        super(Table.TRANSACTION);
    }
}
