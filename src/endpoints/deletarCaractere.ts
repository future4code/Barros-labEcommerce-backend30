import {Request, Response} from "express"; 
import { characters } from "../data";

export default function deletarCaractere(
    req:Request, 
    res: Response
): void{

    const {id} = req.params
    
    const index: number = characters.findIndex(
        character => character.id === Number(id)
    )

    characters.slice(index, 1)

    res.status(200).end()
}