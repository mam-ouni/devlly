import { sql } from "@vercel/postgres";
export default async function getAppointment(req, res) {
    let con;
    try {

        const query = await sql`SELECT * FROM appointment,check_time where appointment.id_appointment = check_time.id_appointment`
        const result = await con.query(query)
        console.log(result);
        if (result.length > 0) {
            res.status(200).json(result)
        } else {
            res.status(204).json({error: 'Empty appointment'})  
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({error: 'Internal Server Error'})
    } finally {
        if (con) await con.end()
    }
}
