import { Validators } from "../../../config";

export class RegisterUserDto {
  private constructor(
    public name: string,
    public email: string,
    public password: string
  ) {}

  // TODO: Recibe un objeto con las propiedades name, email y password y devuelve un array de errores
  static create(object: { [key: string]: any }): [string?, RegisterUserDto?] {
    const { name, email, password } = object;

    if (!name) return ["Name is required"];
    if (!email) return ["Email is required"];
    if (!password) return ["password is required"];

    return [];
  }
}
