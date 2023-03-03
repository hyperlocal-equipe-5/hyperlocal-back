import { CreateUserDto } from 'src/domain/dto/user/createUser-dto';
import { UpdateUserDto } from 'src/domain/dto/user/updateUser-dto';
import { User } from 'src/domain/entities/user';
import { UserEntityInterface } from './abstract/userEntity-interface';

export class UserEntity implements UserEntityInterface {
  constructor(private readonly userDto: CreateUserDto | UpdateUserDto) {}

  validate(): void {
    throw new Error('Method not implemented.');
  }

  getBody(): User {
    throw new Error('Method not implemented.');
  }

  updateBody(mainUser: User): User {
    throw new Error('Method not implemented.');
  }
}
