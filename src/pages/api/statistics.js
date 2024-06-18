import Connection from "./db"

export default async function statistics(req,res) {
    let con;
    try {
        con = await Connection()
        await con.connect()
        const count = await con.query('select count(*) as count from appointment')
        const waitingCount = await con.query('select count(*) as count from appointment where status = "waiting"')
        const canceledCount = await con.query('select count(*) as count from appointment where status = "cancelled"')
        const ConfirmedCount = await con.query('select count(*) as count from appointment where status = "confirmed"')
        console.log(count);
        res.status(200).json({count : count[0][0].count,waitingCount : waitingCount[0][0].count,canceledCount: canceledCount[0][0].count,ConfirmedCount : ConfirmedCount[0][0].count})

    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error"})
        throw error;
    }finally{
        if(con) await con.end()
    }
}
