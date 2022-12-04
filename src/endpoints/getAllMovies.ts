import {Request, Response} from "express"
import { movies } from "../data"

export default function(
    req:Request, 
    res:Response
){
    res.send(movies)

}