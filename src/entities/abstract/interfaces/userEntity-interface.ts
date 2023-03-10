import { CreateUserDto } from 'src/domain/dto/user/createUser-dto';
import { UpdateUserDto } from 'src/domain/dto/user/updateUser-dto';
import { User } from 'src/domain/entities/user';
import { UserType } from '../../../domain/types/user-type';

export interface UserEntityInterface {
  setData(userDto: CreateUserDto | UpdateUserDto): void;
  validate(): void;
  getBody(): UserType;
  updateBody(mainUser: User): UserType;
}
