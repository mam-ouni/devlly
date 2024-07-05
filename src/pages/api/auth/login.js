import { sql } from "@vercel/postgres"
export default async function login(req,res){
    try {
        const query = await sql`select * from admin where email = ${req.body.email} and password = ${req.body.password}`
        if(query.rows.length > 0){
            res.status(200).json({message:"Login Successfull",data:query.rows})
        }else{
            res.status(401).json({message:"Invalid Credentials"})
        }
    } catch (error) {
        console.log(error);
        res.json(500).json({error})
        throw error;
    }
}