import { Router } from "express";
import { AuthRoutes } from "./auth/auth-routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    // TODO: Rutas principales
    router.use("/api/auth", AuthRoutes.routes);
    router.use("/api/auth", AuthRoutes.routes);

    return router;
  }
}
