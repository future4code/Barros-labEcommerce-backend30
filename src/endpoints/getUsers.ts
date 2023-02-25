import { Request, Response, Router } from "express";
import connection from "../baseDataBase/connection";
import app from "../app";

//const router = Router();

app.get("/users", async (req: Request, res: Response) => {
  let errorCode = 400;

  try {
    const result = await connection("Users").select();
    res.status(200).send({ user: result });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

export default app;