import { Request, Response } from "express";
import app from "../app";
import connection from "../baseDataBase/connection";


app.get("/products", async (req: Request, res:Response)=>{



    let errorCode = 400
    try{

      const result = await connection("Products").select(); 
      
    
      res.status(200).send({user: result})


    }catch(error: any){
       res.status(errorCode).send({message: error.message})
        
    }
} )

export default app; 
