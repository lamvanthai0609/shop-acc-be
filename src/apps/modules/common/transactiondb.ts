import { db } from '@/config/db';
import { PoolConnection } from 'mysql2/promise';
import { Pool } from 'mysql2/promise';

export class MySQLTransaction {
    private pool: Pool;
    private connection: PoolConnection | null;
    constructor() {
        this.pool = db;
        this.connection = null;
    }

    // Mở transaction
    async begin() {
        this.connection = await this.pool.getConnection();
        await this.connection.beginTransaction();
    }

    // Commit transaction
    async commit() {
        if (!this.connection) throw new Error('Transaction chưa được bắt đầu');
        await this.connection.commit();
        this.connection.release();
        this.connection = null;
    }

    // Rollback transaction nếu có lỗi
    async rollback() {
        if (!this.connection) throw new Error('Transaction chưa được bắt đầu');
        await this.connection.rollback();
        this.connection.release();
        this.connection = null;
    }
}

export const mysqlTransactionDB = new MySQLTransaction();
