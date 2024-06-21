import { Request, Response } from "express";
import User from "../Database/models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
class authController {
  public static async registerUser(req: Request, res: Response): Promise<void> {
    const { username, email, password, role } = req.body;
    if (!username || !email || !password) {
      res.status(400).json({
        message: "Error",
        error: "Username , email and password can`t be empty",
      });
      return;
    }

    const userCreated = await User.create({
      username,
      email,
      password: bcrypt.hashSync(password, Number(process.env.SALT)),
      role,
    });
    res.status(200).send({ userCreated });
    return;
  }
  /**
   * Login user
   */
  public static async loginUser(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({
        message: "please provide email and password",
      });
      return;
    }
    const [data] = await User.findAll({
      where: {
        email: email,
      },
    });
    if (!data) {
      res.status(401).json({
        message: "Invalid Email",
      });
      return;
    }
    const ismatch = await bcrypt.compare(password, data.password);
    if (!ismatch) {
      res.status(401).json({
        message: "Invalid Password",
      });
      return;
    }
    const token = jwt.sign(
      { id: data.id, email: data.email },
      process.env.TOKEN || "haha360*@#",
      {
        expiresIn: "20d",
      }
    );
    res.status(200).json({
      message: "login sucessful",
      token,
    });
  }
}
export default authController;
