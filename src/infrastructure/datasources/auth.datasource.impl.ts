import { BcryptAdapter } from "../../config";
import { UserModel } from "../../data/mongodb";
import {
  AuthDatasource,
  LoginUserDto,
  RegisterUserDto,
  UserEntity,
  CustomError,
} from "../../domain";

type HashFunction = (password: string) => Promise<string>;
type CompareFunction = (password: string, hashed: string) => Promise<boolean>;

export class AuthDatasourceImpl implements AuthDatasource {
  constructor(
    private readonly hashPassword: HashFunction = BcryptAdapter.hash,
    private readonly comparePassword: CompareFunction = BcryptAdapter.compare
  ) {}

  async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
    const { name, email, password } = registerUserDto;

    try {
      const userExists = await UserModel.findOne({ email });

      if (userExists) {
        throw CustomError.badRequest("User could not be created");
      }

      const user = await UserModel.create({
        name,
        email,
        password: this.hashPassword(password),
      });

      return new UserEntity(user.id, name, email, user.password, user.roles);
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
