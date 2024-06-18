import Connection from "./db"

export default async function updateAppointment(req, res) {
    let con;
    try {
        con = await Connection();
        await con.connect();
        const { id, status } = req.body;
        console.log(req.body.id);

        if (status === 'cancel') {
            const result = await con.query(`UPDATE appointment SET status = 'cancelled' WHERE id_appointment = ${id}`);
            console.log(result);
            res.status(200).json({ message: "Appointment cancelled successfully" });
        } else if (status === 'confirm') {
            const result = await con.query(`UPDATE appointment SET status = 'confirmed' WHERE id_appointment = ${id}`);
            console.log(result);
            res.status(200).json({ message: "Appointment confirmed successfully" });
        } else {
            const result = await con.query(`DELETE FROM appointment WHERE id_appointment = ${id}`);
            console.log(result);
            res.status(200).json({ message: 'Appointment deleted successfully' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    } finally {
        if (con) await con.end();
    }
}
