import { sql } from "@vercel/postgres";

export default async function statistics(req, res) {
    try {
        const countResult = await sql`SELECT COUNT(*) as count FROM appointment`;
        const waitingCountResult = await sql`SELECT COUNT(*) as count FROM appointment WHERE status = 'waiting'`;
        const canceledCountResult = await sql`SELECT COUNT(*) as count FROM appointment WHERE status = 'cancelled'`;
        const confirmedCountResult = await sql`SELECT COUNT(*) as count FROM appointment WHERE status = 'confirmed'`;

        const count = countResult.rows[0].count;
        const waitingCount = waitingCountResult.rows[0].count;
        const canceledCount = canceledCountResult.rows[0].count;
        const confirmedCount = confirmedCountResult.rows[0].count;

        console.log({ count, waitingCount, canceledCount, confirmedCount });

        res.status(200).json({
            count,
            waitingCount,
            canceledCount,
            confirmedCount
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
