import { Request, Response } from "express";
import app from "../app";
import connection from "../baseDataBase/connection";

let errorCode = 400

app.get("/users/:user_id/purchases", async(req: Request, res:Response)=>{

    try{


        

    const userId = req.params.user_id;

    // Verificar se o user_id informado existe no sistema

    const userExists = await connection
      .from('labecommerce_purchases')
      .where({user_id: 1})
      .first()
        if (!userExists) {
          // Se o user_id não existir, retornar um erro 404 (not found)
          return res.status(404).send({ error: 'User not found' });
        }
  
        // Buscar todas as compras associadas ao user_id informado

     const purchases = await connection("labecommerce_purchases").where({user_id: 3}); 

     return res.send(purchases)

    }catch(error: any){
        res.status(errorCode).send({message: error.message})
    }
    
})

export default app