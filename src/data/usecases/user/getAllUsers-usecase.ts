import { GetAllUsersUseCaseInterface } from 'src/data/abstract/usecases/user/getAllUsersUseCase-interface';
import { User } from 'src/domain/entities/user';

export class GetAllUsersUseCase implements GetAllUsersUseCaseInterface {
  public execute(restaurantId: string): Promise<User[]> {
    throw new Error('Method not implemented.');
  }
}
