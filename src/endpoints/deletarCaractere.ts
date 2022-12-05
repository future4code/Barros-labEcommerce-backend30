import {Request, Response} from "express"; 
import { characters } from "../data";
import connection from "./connections";

export default async function deletarCaractere(
    req:Request, 
    res: Response
):Promise <void>{
    try{
        const {id} = req.params

        await connection("CARACTERE")
        .delete()
        .where({id})

        res.status(200).end()
    } catch(error){
        res.status(500).send("Erro inesperado no servidoR")
    }
}
