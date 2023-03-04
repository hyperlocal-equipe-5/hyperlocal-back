import { User } from 'src/domain/entities/user';
import { UserType } from '../types/user-type';

export interface UserEntityInterface {
  validate(): void;
  getBody(): UserType;
  updateBody(mainUser: User): UserType;
}
