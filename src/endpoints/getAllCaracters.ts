import {Request, Response} from "express"
import { character } from "../types"
import connection from "./connections"


export default async function getAllCaracters(
    req: Request, 
    res: Response
):Promise<void>{

    try{

    const name = req.params


    const CARACTERE: character[] = await connection("CARACTERE") 
    
    res.send(CARACTERE)

}catch(error){
    res.status(500).send("Erro inesperado no servidor")
}

}