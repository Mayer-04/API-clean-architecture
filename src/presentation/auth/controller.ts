import { Request, Response } from "express";
import { AuthRespository, RegisterUserDto } from "../../domain";

export class AuthController {
  constructor(private readonly authRepository: AuthRespository) {}

  // TODO: Registrar casos de uso
  registerUser = (req: Request, res: Response) => {
    const [error, registerUserDto] = RegisterUserDto.create(req.body);

    if (error) return res.status(400).json({ error });

    this.authRepository
      .register(registerUserDto!)
      .then((user) => res.status(201).json(user))
      .catch((error) => res.status(500).json({ error }));
  };

  loginUser = (req: Request, res: Response) => {
    res.json("Login Controller");
  };
}
