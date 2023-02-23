import { Request, Response, query } from "express";
import app from "../app";
import connection from "../baseDataBase/connection";


app.post("/purchases", async (req: Request, res: Response) => {
  let { user_id, product_id, quantity, total_price } = req.body;
 

  try {


    const product = await connection("Products")
      .where({ id: product_id })
      .first();

    if (!product) {
      return res.status(400).send({ message: "Produto não encontrado." });
    }


    const purchase = {
      user_id: user_id,
      product_id: product_id,
      quantity: quantity,
      total_price: quantity * product_id
    };
    await connection(`labecommerce_purchases`).insert(purchase);

    res.status(201).send(purchase);
  } catch (error: any) {
    console.log(error);
  }
});

export default app;

