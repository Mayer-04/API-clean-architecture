import express, { Router } from "express";
import morgan from "morgan";
import helmet from "helmet";

interface ServerOptions {
  port: number;
  routes: Router;
}

export class Server {
  public readonly app = express();
  private readonly PORT: number;
  private readonly routes: Router;

  constructor(options: ServerOptions) {
    const { port, routes } = options;
    this.PORT = port;
    this.routes = routes;
  }

  private setupMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(helmet());
    this.app.use(morgan("dev"));
    this.app.use(this.routes);
  }

  async start() {
    this.app.disable("x-powered-by");
    this.setupMiddlewares();
    this.app.listen(this.PORT, () => {
      console.log(`Server running on port http://localhost:${this.PORT}`);
    });
  }
}
