import {
  AuthDatasource,
  LoginUserDto,
  RegisterUserDto,
  UserEntity,
  CustomError,
} from "../../domain";

export class AuthDatasourceImpl implements AuthDatasource {
  async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
    const { name, email, password } = registerUserDto;

    try {
      // TODO: Verificar si el correo existe

      // TODO: Hashear la contraseña

      // TODO: Mappear el objeto UserEntity

      return new UserEntity(" 1", name, email, password, ["ADMIN_ROLE"]);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServerError("Internal server error");
    }
  }
  async login(loginUserDto: LoginUserDto): Promise<UserEntity> {
    throw new Error("Method not implemented.");
  }
}
