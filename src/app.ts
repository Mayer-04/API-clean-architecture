import { Server } from "./presentation/server";
import { envs } from "./config";

const main = async () => {
  const { PORT } = envs;

  // TODO: Base de datos

  // TODO: Iniciar servidor
  new Server({
    port: PORT,
  }).start();
};

(async () => {
  await main();
})();
