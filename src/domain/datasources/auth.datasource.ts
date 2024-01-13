import { UserEntity } from "../entities/user.entity";
import { RegisterUserDto } from "../dtos/auth/register-user.dto";
import { LoginUserDto } from "../dtos/auth/login-user.dto";

export interface AuthDatasource {
  login(loginUserDto: LoginUserDto): Promise<UserEntity>;
  register(registerUserDto: RegisterUserDto): Promise<UserEntity>;
}
