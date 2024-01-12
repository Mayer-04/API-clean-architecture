import {
  AuthDatasource,
  AuthRespository,
  LoginUserDto,
  RegisterUserDto,
  UserEntity,
} from "../../domain";

export class AuthRepositoryImpl implements AuthRespository {
  constructor(private readonly authDatasource: AuthDatasource) {}

  // TODO: Recibir un datasource y lo manda llamar
  register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
    return this.authDatasource.register(registerUserDto);
  }
  login(loginUserDto: LoginUserDto): Promise<UserEntity> {
    throw new Error("Method not implemented.");
  }
}
