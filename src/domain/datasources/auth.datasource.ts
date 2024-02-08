import { UserEntity } from "@domain/entities/user.entity";
import { RegisterUserDto } from "@domain/dtos/auth/register-user.dto";
import { LoginUserDto } from "@domain/dtos/auth/login-user.dto";

export interface AuthDatasource {
  login(loginUserDto: LoginUserDto): Promise<UserEntity>;
  register(registerUserDto: RegisterUserDto): Promise<UserEntity>;
}
