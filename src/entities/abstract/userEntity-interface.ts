import { CreateUserDto } from 'src/domain/dto/user/createUser-dto';
import { UpdateUserDto } from 'src/domain/dto/user/updateUser-dto';
import { User } from 'src/domain/entities/user';

export interface UserEntityInterface {
  validate(): void;
  getBody(): User;
  updateBody(mainUser: User): User;
}
