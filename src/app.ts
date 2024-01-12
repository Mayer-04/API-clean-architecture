import { Server } from "./presentation/server";
import { envs } from "./config";
import { AppRoutes } from "./presentation/routes";
import { mongoDatabase } from "./data/mongodb";

const startServer = async () => {
  const { PORT, MONGO_URI, MONGO_DB_NAME } = envs;

  await mongoDatabase.connect({
    mongoUrl: MONGO_URI,
    dbName: MONGO_DB_NAME,
  });

  const server = new Server({
    port: PORT,
    routes: AppRoutes.routes,
  });

  server.start();
};

(async () => {
  await startServer();
})();
