import mysql from 'mysql2/promise'

export default function Connection(){
     const db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'yahia',
        database: 'devly'
     })
     return db;
}