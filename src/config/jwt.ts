import jwt from "jsonwebtoken";

export class Jwt {
  static async generateToken(
    payload: Object,
    duration?: string
  ): Promise<string | null> {
    return new Promise((resolve) => {
      jwt.sign(
        payload,
        "SEED",
        {
          expiresIn: duration,
        },
        (err, token) => {
          if (err) {
            resolve(null);
          }
          resolve(token!);
        }
      );
    });
  }
}
