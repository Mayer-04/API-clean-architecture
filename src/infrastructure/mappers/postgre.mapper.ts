import { CustomError, UserEntity } from "@domain/index";

export class PostgreMapper {
  static userEntityFromObject(data: { [key: string]: any }): UserEntity {
    const { id, name, email, password, roles } = data;

    if (!name) throw CustomError.badRequest("Missing name");
    if (!email) throw CustomError.badRequest("Missing email");
    if (!password) throw CustomError.badRequest("Missing password");
    if (!roles) throw CustomError.badRequest("Missing roles");

    return {
      id,
      name,
      email,
      password,
      roles,
    };
  }
}
