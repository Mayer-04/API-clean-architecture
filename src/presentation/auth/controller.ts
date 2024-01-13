import { Request, Response } from "express";
import { AuthRespository, CustomError, RegisterUserDto } from "../../domain";
import { Jwt } from "../../config";
import { UserModel } from "../../data/mongodb";
export class AuthController {
  constructor(private readonly authRepository: AuthRespository) {}

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

    this.authRepository
      .register(registerUserDto!)
      .then(async (user) =>
        res.status(201).json({
          user,
          token: await Jwt.generateToken({ id: user.id }),
        })
      )
      .catch((error) => this.handleError(error, res));
  };

  loginUser = (req: Request, res: Response) => {
    res.json("Login Controller");
  };

  getUsers = (req: Request, res: Response) => {
    UserModel.find()
      .then((users) => {
        res.json({ user: req.body.user });
      })
      .catch((error) => res.status(500).json(error));
  };
}
