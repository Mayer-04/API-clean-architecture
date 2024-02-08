import { Router } from "express";
import { AuthRoutes } from "@presentation/auth/auth-routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/api/auth", AuthRoutes.routes);
    router.use("/api/auth", AuthRoutes.routes);

    return router;
  }
}
