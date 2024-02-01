import { hash, compare } from "bcryptjs";

export class BcryptAdapter {
  static async hashPassword(password: string): Promise<string> {
    try {
      const saltRounds = 10;
      const hashedPassword = await hash(password, saltRounds);
      return hashedPassword;
    } catch (error) {
      throw new Error(`Error hashing password: ${error}`);
    }
  }

  static async comparePassword(
    password: string,
    hashed: string
  ): Promise<boolean> {
    try {
      const passwordMatches = await compare(password, hashed);
      return passwordMatches;
    } catch (error) {
      throw new Error(`Error comparing password: ${error}`);
    }
  }
}
