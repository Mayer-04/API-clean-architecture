import { Request, Response } from "express";
import {
  AuthRepository,
  CustomError,
  LoginUser,
  LoginUserDto,
  RegisterUser,
  RegisterUserDto,
} from "../../domain";
import { UserModel } from "../../data/mongodb";

export class AuthController {
  constructor(private readonly authRepository: AuthRepository) {}

  private handleError(error: unknown, res: Response) {
    if (error instanceof CustomError) {
      const { statusCode, message } = error;
      return res.status(statusCode).json({ error: message });
    }
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }

  registerUser = async (req: Request, res: Response) => {
    const { name, email, password }: RegisterUserDto = req.body;

    const [error, registerUserDto] = RegisterUserDto.create({
      name,
      email,
      password,
    });

    if (error) {
      return res.status(400).json({ error });
    }

    try {
      const user = await new RegisterUser(this.authRepository).execute(
        registerUserDto!
      );
      res.json(user);
    } catch (error) {
      this.handleError(error, res);
    }
  };

  loginUser = async (req: Request, res: Response) => {
    const { email, password }: LoginUserDto = req.body;

    const [error, loginUserDto] = LoginUserDto.create({ email, password });

    if (error) {
      return res.status(400).json({ error });
    }

    try {
      const data = await new LoginUser(this.authRepository).execute(
        loginUserDto!
      );
      res.json(data);
    } catch (error) {
      this.handleError(error, res);
    }
  };

  getUsers = async (req: Request, res: Response) => {
    try {
      const user = req.body.user;
      const users = await UserModel.find();
      res.json({ user, users });
    } catch (error) {
      res.status(500).json(error);
    }
  };
}
