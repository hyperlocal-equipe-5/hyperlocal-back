import { User } from 'src/domain/entities/user';

export interface UserEntityInterface {
  validate(): void;
  getBody(): User;
  updateBody(): User;
}
