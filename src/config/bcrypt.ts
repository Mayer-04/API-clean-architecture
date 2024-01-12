import { hash, compare } from "bcryptjs";

export class BcryptAdapter {
  static async hash(password: string): Promise<string> {
    const saltRounds = 10;
    const hashedPassword = await hash(password, saltRounds);
    return hashedPassword;
  }

  static async compare(password: string, hashed: string): Promise<boolean> {
    const passwordMatches = await compare(password, hashed);
    return passwordMatches;
  }
}
