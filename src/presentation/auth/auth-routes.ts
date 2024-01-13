import { Router } from "express";
import { AuthController } from "./controller";
import { AuthDatasourceImpl, AuthRepositoryImpl } from "../../infrastructure";
import { AuthMiddleware } from "../middlewares/auth.middleware";

export class AuthRoutes {
  static get routes(): Router {
    const router = Router();

    const datasourceDatabase = new AuthDatasourceImpl();

    const authRepository = new AuthRepositoryImpl(datasourceDatabase);

    const controller = new AuthController(authRepository);

    router.post("/login", controller.loginUser);
    router.post("/register", controller.registerUser);
    router.get("/", AuthMiddleware.validateToken, controller.getUsers);

    return router;
  }
}
