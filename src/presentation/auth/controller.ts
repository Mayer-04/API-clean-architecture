import { Request, Response } from "express";

export class AuthController {
  constructor() {}

  // TODO: Registrar casos de uso
  registerUser = (req: Request, res: Response) => {
    res.json("Register Controller");
  };
  loginUser = (req: Request, res: Response) => {
    res.json("Login Controller");
  };
}
