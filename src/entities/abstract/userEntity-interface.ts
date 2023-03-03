import { CreateUserDto } from 'src/domain/dto/user/createUser-dto';
import { UpdateUserDto } from 'src/domain/dto/user/updateUser-dto';
import { User } from 'src/domain/entities/user';

export interface UserEntityInterface {
  constructor(userDto: CreateUserDto | UpdateUserDto): void;
  validate(): void;
  getBody(): User;
  updateBody(mainUser: User): User;
}
