import { Request, Response } from "express";
import User from "../Database/models/userModel";
import bcrypt from "bcrypt";
class authController {
  public static async registerUser(req: Request, res: Response): Promise<void> {
    try {
      const { username, email, password } = req.body;
      if (!username || !email || !password) {
        res.status(400).json({
          message: "Error",
          error: "Username , email and password can`t be empty",
        });
        return;
      }
      const hashPass = await bcrypt.hash(password, Number(process.env.SALT));
      const userCreated = await User.create({
        username,
        email,
        password: hashPass,
      });
      res.status(200).send({ userCreated });
      return;
    } catch (error) {
      res.status(200).send({ error: "failed" });
      return;
    }
  }
}
export default authController;
