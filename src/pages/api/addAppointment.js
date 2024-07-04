import { sql } from '@vercel/postgres';

export default async function addAppointment(req, res) {
    try {
        // Log the request body
        console.log(req.body);

        // Check if the time slot is taken
        const res1 = await sql`
            SELECT date, time 
            FROM check_time 
            WHERE date = ${req.body.date} AND time = ${req.body.time}
        `;

        console.log(res1.rowCount);
        if (res1.rowCount === 0) {
            // If the time slot is not taken, proceed with adding the appointment
            const result2 = await sql`
                INSERT INTO appointment (name, email, subject, typeM, msg, number) 
                VALUES (${req.body.name}, ${req.body.email}, ${req.body.subject}, ${req.body.type}, ${req.body.message}, ${req.body.number}) 
                RETURNING id_appointment
            `;

            console.log('Inserted successfully!');

            const id = result2.rows[0].id_appointment;

            await sql`
                INSERT INTO check_time (date, time, id_appointment) 
                VALUES (${req.body.date}, ${req.body.time}, ${id})
            `;

            res.status(200).json({ message: 'Appointment added successfully!' });
        } else {
            res.status(400).json({ message: 'Adding appointment failed: Time slot already taken' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}
