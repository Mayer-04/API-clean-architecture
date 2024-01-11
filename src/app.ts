import { Server } from "./presentation/server";
import { envs } from "./config";
import { AppRoutes } from "./presentation/routes";

const serverStart = async () => {
  const { PORT } = envs;

  // TODO: Base de datos

  // TODO: Iniciar servidor
  new Server({
    port: PORT,
    routes: AppRoutes.routes,
  }).start();
};

(async () => {
  await serverStart();
})();
