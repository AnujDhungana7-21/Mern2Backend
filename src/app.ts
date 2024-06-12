import express, { Application, Request, Response } from "express";
require("./model/index");
const app: Application = express();
const PORT: number = 8000;
app.get("/", (req: Request, res: Response) => {
  res.send("hello world after");
});
app.listen(8000, () => {
  console.log("server started at", PORT);
});
