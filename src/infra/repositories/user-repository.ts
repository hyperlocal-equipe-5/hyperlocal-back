import { User } from 'src/domain/entities/user';
import { UserType } from 'src/domain/types/user-type';
import { UserRepositoryInterface } from '../abstract/repositories/userRepository-interface';

export class UserRepository implements UserRepositoryInterface {
  public create(userBody: UserType): Promise<User> {
    throw new Error('Method not implemented.');
  }
  public delete(userId: string, restaurantId: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
  public getOneById(userId: string, restaurantId: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
  public getOneByEmail(userEmail: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
  public getAll(userId: string): Promise<User[]> {
    throw new Error('Method not implemented.');
  }
  public update(userBody: UserType): Promise<User> {
    throw new Error('Method not implemented.');
  }
}
