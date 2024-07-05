import { sql } from "@vercel/postgres";

export default async function getTimes(req, res) {
    try {
        console.log(req.body.date);
        const result = await sql`select time from check_time where date = ${req.body.date}`
        console.log(result.rows);
        res.status(200).json(result.rows);
    } catch (error) {
        console.log("err server: " + error);
        res.status(500).json({ message: "Internal server error" });
    } 
}
