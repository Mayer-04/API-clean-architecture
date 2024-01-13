import { Validators } from "../../../config";

export class RegisterUserDto {
  private constructor(
    public name: string,
    public email: string,
    public password: string
  ) {}

  static create(object: {
    name: string;
    email: string;
    password: string;
  }): [string?, RegisterUserDto?] {
    const { name, email, password } = object;

    if (!name) return ["Name is required"];

    if (!email) return ["Email is required"];

    if (!password) return ["Password is required"];

    if (password.length < 6) return ["Password must be at least 6 characters"];

    if (!Validators.email.test(email)) return ["Invalid email"];

    return [undefined, new RegisterUserDto(name, email, password)];
  }
}
