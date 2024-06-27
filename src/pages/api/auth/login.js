import Connection from "../db";
export default async function login(req,res){
    try {
        const con = await Connection()
        await con.connect()
        const query = 'select * from admin where email = ? and password = ?'
        const values = [
            req.body.email,
            req.body.password,
        ]
        const result = await con.query(query,values)
        if(result.length > 0){
            res.status(200).json({message:"Login Successfull",data:result[0]})
        }else{
            res.status(401).json({message:"Invalid Credentials"})
        }
    } catch (error) {
        console.log(error);
        res.json(500).json({error})
        throw error;
    }finally{
        if(con) await con.end()
    }
}