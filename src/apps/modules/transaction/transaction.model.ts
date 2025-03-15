import { Table } from '@/libs/utils/constant';
import { GeneralModel } from '../general';
import { Transaction } from './transaction.entity';
import { db } from '@/config/db';

export class TransactionModel extends GeneralModel<Transaction> {
    constructor() {
        super(Table.TRANSACTION);
    }

    public async findByUser(userId: number) {
        const query = `SELECT 
        t.id,
        t.userId,
        t.type,
        t.amount,
        t.finalBalance,
        t.created,
        agi.price,  
        agi.discount,
        asi.username,
        asi.password
        FROM transactions t
        LEFT JOIN account_general_information agi ON t.accountId = agi.id
        LEFT JOIN account_specific_information asi ON t.accountId = asi.accountId
        WHERE t.userId = ?`; // Fix this query

        const [rows] = await db.query(query, [userId]);
        return rows;
    }
}
