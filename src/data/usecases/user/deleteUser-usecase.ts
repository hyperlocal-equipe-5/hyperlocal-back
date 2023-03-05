import { DeleteUserUseCaseInterface } from 'src/data/abstract/usecases/user/deleteUserUseCase-interface';
import { User } from 'src/domain/entities/user';

export class DeleteUserUseCase implements DeleteUserUseCaseInterface {
  public execute(userId: string, restaurantId: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
}
