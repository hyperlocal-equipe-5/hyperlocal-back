import { User } from 'src/domain/entities/user';

export interface DeleteUserUseCaseInterface {
  execute(userId: string, restaurantId: string): Promise<User>;
}
