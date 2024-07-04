import mysql from 'mysql2/promise';

export default async function Connection() {
    try {
        console.log(process.env.DB_HOST, process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_NAME);
        const db = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'yahia',
            database:'devly'
        });
        console.log('Database connected successfully');
        return db;
    } catch (error) {
        console.error('Database connection error:', error);
        throw error;
    }
}
