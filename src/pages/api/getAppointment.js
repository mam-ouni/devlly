import { sql } from "@vercel/postgres";
export default async function getAppointment(req, res) {
    try {
        const query = await sql`SELECT * FROM appointment,check_time where appointment.id_appointment = check_time.id_appointment`
        console.log(query);
        if (query.rows.length > 0) {
            res.status(200).json({result: query.rows})
        } else {
            res.status(204).json({error: 'Empty appointment'})  
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({error: 'Internal Server Error'})
    } 
}
