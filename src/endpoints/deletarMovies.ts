import {Request, Response} from "express"
import { movies,} from "../data"

export default function deletarMovies(
    req: Request, 
    res: Response

):void{

    const {id} = req.params

const index: number = movies.findIndex(
    movie => movie.id === Number(id)
)
movies.slice(index, 1)

res.status(200).send()
    
}

