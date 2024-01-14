export interface UserEntity {
  id?: string;
  name: string;
  email: string;
  password: string;
  roles: string[];
  img?: string;
}
