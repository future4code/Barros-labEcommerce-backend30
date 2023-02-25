import { Request, Response } from "express";
import app from "./app";
import registerUsers from "./endpoints/registerUsers"
import getUsers from "./endpoints/getUsers"
import registerProducts from "./endpoints/registerProducts"
import getProdcts from "./endpoints/getProducts"
import purchases from "./endpoints/registerPurchases"
import getIdPurchases from "./endpoints/getIdPurchases"

app.post("/registerUsers", registerUsers)
app.post("/registerProdcts", registerProducts)
app.post("/purchases", purchases)
app.get("/users", getUsers)
app.get("Products", getProdcts)
app.get("/users/:user_id/purchases", getIdPurchases)











app.listen(3306, () => {
    console.log("Servidor rodando na porta 3003");
});





