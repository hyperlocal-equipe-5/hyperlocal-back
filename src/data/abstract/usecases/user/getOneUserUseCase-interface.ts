import { User } from 'src/domain/entities/user';

export interface GetOneUserUseCaseInterface {
  execute(userId: string, restaurantId: string): Promise<User>;
}
