import { Router } from "express";
import { AuthController } from "./controller";
import {
  AuthDatasourceImpl,
  AuthRepositoryImpl,
  PostgreAuthDatasource,
} from "@infrastructure/index";
import { AuthMiddleware } from "@presentation/middlewares/auth.middleware";

export class AuthRoutes {
  static get routes(): Router {
    const router = Router();
    // TODO: Base de datos PostgreSQL
    // const postgreDatabase = new PostgreAuthDatasource();

    const mongoDatabase = new AuthDatasourceImpl();

    const authRepository = new AuthRepositoryImpl(mongoDatabase);

    const controller = new AuthController(authRepository);

    router.post("/login", controller.loginUser);
    router.post("/register", controller.registerUser);
    router.get("/", AuthMiddleware.validateToken, controller.getUsers);

    return router;
  }
}
