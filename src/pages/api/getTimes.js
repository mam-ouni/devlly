import Connection from "./db";

export default async function getTimes(req, res) {
    let con;
    try {
        con = await Connection();
        await con.connect();
        console.log(req.body.date);
        
        const [result] = await con.execute('select time from check_time where date = ?', [req.body.date]);
       
        res.status(200).json(result);
    } catch (error) {
        console.log("err server: " + error);
        res.status(500).json({ message: "Internal server error" });
    } finally {
        if (con) await con.end(); // Ensure the connection is closed
    }
}
