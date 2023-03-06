import { User } from 'src/domain/entities/user';

export interface GetAllUsersUseCaseInterface {
  execute(restaurantId: string): Promise<User[]>;
}
