import mysql from 'mysql2/promise';

export const db = mysql.createPool({
    host: process.env.DATABASE_URL || '103.56.163.248',
    port: process.env.DATABASE_PORT
        ? parseInt(process.env.DATABASE_PORT, 10)
        : 3306,
    user: process.env.DATABASE_USER || 'root',
    password: 'Lamvanthai0609!',
    database: process.env.DATABASE_NAME || 'shop_acc',
});
