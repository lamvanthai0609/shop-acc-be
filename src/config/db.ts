import mysql from 'mysql2/promise';

export const db = mysql.createPool({
    host: '103.56.163.248',
    user: 'root',
    password: '',
    database: 'shop_acc',
});
