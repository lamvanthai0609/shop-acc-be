import { db } from '@/config/db';

export class GeneralModel<T> {
    protected tableName: string;

    constructor(tableName: string) {
        this.tableName = tableName;
    }

    async find(): Promise<T[]> {
        const [rows] = await db.query(`SELECT * FROM ??`, [this.tableName]);
        return rows as T[];
    }

    async findById(id: number): Promise<T | null> {
        const [rows] = await db.query(`SELECT * FROM ?? WHERE id = ?`, [
            this.tableName,
            id,
        ]);
        return (rows as T[])[0] || null;
    }

    async findByFields(
        fields: Partial<T>,
        type: 'AND' | 'OR' = 'AND'
    ): Promise<T[]> {
        const keys = Object.keys(fields);
        if (keys.length === 0) return this.find();

        const conditions = keys.map((key) => `${key} = ?`).join(` ${type} `);
        const values = Object.values(fields);

        const sql = `SELECT * FROM ${this.tableName} WHERE ${conditions}`;

        const [rows] = await db.query(sql, values);
        return rows as T[];
    }

    async findOneByFields(
        fields: Partial<T>,
        type: 'AND' | 'OR' = 'AND'
    ): Promise<T | null> {
        const [result] = await this.findByFields(fields, type);
        return result || null;
    }

    async save(data: Partial<T>): Promise<number> {
        const [result] = await db.query(`INSERT INTO ?? SET ?`, [
            this.tableName,
            data,
        ]);
        return (result as any).insertId;
    }

    async update(id: number, data: Partial<T>): Promise<boolean> {
        const [result] = await db.query(`UPDATE ?? SET ? WHERE id = ?`, [
            this.tableName,
            data,
            id,
        ]);
        return (result as any).affectedRows > 0;
    }

    async delete(id: number): Promise<boolean> {
        const [result] = await db.query(`DELETE FROM ?? WHERE id = ?`, [
            this.tableName,
            id,
        ]);
        return (result as any).affectedRows > 0;
    }
}
