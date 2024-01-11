import express from "express";

interface Options {
  port: number;
}

export class Server {
  public readonly app = express();
  private readonly PORT: number;

  constructor(options: Options) {
    const { port } = options;
    this.PORT = port;
  }

  async start() {
    this.app.listen(this.PORT, () => {
      console.log(`Server running on port http://localhost:${this.PORT}`);
    });
  }
}
