import mysql from 'mysql2/promise';
import Connection from './db';

export default async function addAppointment(req, res) {
    let con;
    try {
        // Establish the connection
        con = await Connection();
        await con.connect();
        console.log(req.body);
        const sql1 = "SELECT date, time FROM check_time WHERE date = ? AND time = ?";
        const values1 = [req.body.date, req.body.time];
        const [res1] = await con.execute(sql1, values1);
        console.log(res1.length);
        if (res1.length === 0) {
            // If the time slot is not taken, proceed with adding the appointment
            const sql2 = 'INSERT INTO appointment (name, email, subject, typeM,msg, number) VALUES (?, ?, ?,?, ?, ?)';
            const values2 = [
                req.body.name,
                req.body.email,
                req.body.subject,
                req.body.type,
                req.body.message,
                req.body.number
            ];
            console.log(values2);
            await con.execute(sql2, values2).then(res => console.log('insert successfuly!')).catch(err => console.log(err))
            const [idResult] = await con.execute('SELECT MAX(id_appointment) as id FROM appointment');
            const id = idResult[0].id;

            const sql3 = 'INSERT INTO check_time (date, time, id_appointment) VALUES (?, ?, ?)';
            const values3 = [req.body.date, req.body.time, id];
            await con.execute(sql3, values3);

            res.status(200).json({ message: 'Appointment added successfully!' });
        } else {
            res.status(400).json({ message: 'Adding appointment failed: Time slot already taken' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    } finally {
        if (con) await con.end(); 
    }
}
