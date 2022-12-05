import express from "express"
import dotenv from "dotenv"


import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

/*
app.get("/", (req, res)=>{
    res.status(201).send("Fagner Servidor funcionando!!!")
    
})*/

app.listen(3306, () => {
    console.log("Servidor rodando na porta 3306");
});

export default app