import { Request, Response } from "express";
import app from "../app";
import connection from "../baseDataBase/connection";

app.post("/registerProdcts", async(req: Request, res:Response)=>{

        const {name, price, image, description} = req.body

    try{

        await connection.insert(
            [
                {
                   name: name, 
                   price: price, 
                   image: image, 
                   description: description
                }
            ]
        ).into("Products")

        res.status(200).send("Produto criado com sucesso")


    }catch(error:any){
        console.log(error)

    }
})

export default app