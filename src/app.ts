import { Server } from "./presentation/server";
import { envs } from "./config";

const serverStart = async () => {
  const { PORT } = envs;

  // TODO: Base de datos

  // TODO: Iniciar servidor
  new Server({
    port: PORT,
  }).start();
};

(async () => {
  await serverStart();
})();
