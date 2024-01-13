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

  // TODO: Verifica si el error es una instancia de la clase CustomError.
  private handleError(error: unknown, res: Response) {
    if (error instanceof CustomError) {
      const { statusCode, message } = error;
      return res.status(statusCode).json({ error: message });
    }
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }

  // TODO: Registrar casos de uso
  registerUser = (req: Request, res: Response) => {
    const [error, registerUserDto] = RegisterUserDto.create(req.body);

    if (error) return res.status(400).json({ error });

    new RegisterUser(this.authRepository)
      .execute(registerUserDto!)
      .then((user) => res.json(user))
      .catch((error) => this.handleError(error, res));
  };

  loginUser = (req: Request, res: Response) => {
    const [error, loginUserDto] = LoginUserDto.create(req.body);
    if (error) return res.status(400).json({ error });

    new LoginUser(this.authRepository)
      .execute(loginUserDto!)
      .then((data) => res.json(data))
      .catch((error) => this.handleError(error, res));
  };

  getUsers = (req: Request, res: Response) => {
    UserModel.find()
      .then((users) => {
        res.json({ user: req.body.user });
      })
      .catch((error) => res.status(500).json(error));
  };
}
