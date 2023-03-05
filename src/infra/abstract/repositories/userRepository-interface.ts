import { User } from 'src/domain/entities/user';
import { UserType } from 'src/domain/types/user-type';

export interface UserRepositoryInterface {
  create(userBody: UserType): Promise<User>;
  delete(userId: string, restaurantId: string): Promise<User>;
  getOneById(userId: string, restaurantId: string): Promise<User>;
  getOneByEmail(userEmail: string): Promise<User>;
  getAll(userId: string): Promise<User[]>;
  update(userBody: UserType): Promise<User>;
}
