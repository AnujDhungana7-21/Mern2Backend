/**
 * import path
 */
import express, { Application, Request, Response } from "express";
import * as dotenv from "dotenv";
dotenv.config();
require("./Database/connection");
import userRoute from "./Routers/userRoutes";
const app: Application = express();
/**
 * import routes
 */
app.use(express.json());
app.use("/v1/api", userRoute);
// app.use('/v1/api',products)
/**
 * listen to port number
 */
const PORT: number = 3000;
app.listen(3000, () => {
  console.log("server started at", PORT);
});
