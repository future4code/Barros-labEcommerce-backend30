/*import chalk from 'chalk'
let message = chalk.redBright("Boa Noite: Fagner Fontes Batista")
console.log(message);*/
import express from "express"
import dotenv from "dotenv"


import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())


app.get("/", (req, res)=>{
    res.status(200).send("Servidor funcionando!!!")
    
})

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});



