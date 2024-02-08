import { Request, Response, NextFunction } from "express";
import { Jwt } from "@config/index";
import { UserModel } from "@data/mongodb";

export class AuthMiddleware {
  static validateToken = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const token = req.headers.authorization;

    if (!token) {
      res.status(401).json({ error: "No token provided" });
    }

    if (!token?.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Invalid Bearer token" });
    }

    const tokenValue = token.split(" ").at(1) ?? "";

    req.headers.authorization = tokenValue;

    try {
      const payload = await Jwt.validateToken<{ id: string }>(tokenValue);

      if (!payload) {
        return res.status(401).json({ error: "Invalid token" });
      }

      const user = await UserModel.findById(payload.id);

      if (!user) {
        return res
          .status(401)
          .json({ error: "Invalid Token - user not found" });
      }

      req.body.user = user;

      next();
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
}
