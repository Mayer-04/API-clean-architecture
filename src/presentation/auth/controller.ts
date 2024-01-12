import { Request, Response } from "express";
import { AuthRespository, CustomError, RegisterUserDto } from "../../domain";

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
      .then((user) => res.status(201).json(user))
      .catch((error) => this.handleError(error, res));
  };

  loginUser = (req: Request, res: Response) => {
    res.json("Login Controller");
  };
}
