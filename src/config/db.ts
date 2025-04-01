import mysql from 'mysql2/promise';

export const db = mysql.createPool({
    host: process.env.DATABASE_URL || 'localhost',
    port: process.env.DATABASE_PORT
        ? parseInt(process.env.DATABASE_PORT, 10)
        : 3306,
    user: process.env.DATABASE_USER || 'root',
    password: '',
    database: process.env.DATABASE_NAME || 'shop_acc',
});
