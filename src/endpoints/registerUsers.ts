import { Request, Response } from "express";
import app from "../app";
import connection from "../baseDataBase/connection";


app.post("/registerUsers", async (req:Request, res: Response) =>{

    const {name, email, password} = req.body

    try{

        await connection.insert(
           [
            {
                name: name, 
                email: email, 
                password: password

            }], 

            


        ).into("Users")

        res.status(200).send("Usuário criado com sucesso")
        
    }catch(error){
        console.log(error)
    }
    
    
})

export default app