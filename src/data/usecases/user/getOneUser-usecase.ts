import { GetOneUserUseCaseInterface } from 'src/data/abstract/usecases/user/getOneUserUseCase-interface';
import { User } from 'src/domain/entities/user';

export class GetOneUserUseCase implements GetOneUserUseCaseInterface {
  public execute(userId: string, restaurantId: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
}
