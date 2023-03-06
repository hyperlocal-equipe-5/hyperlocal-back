import { GetOneUserUseCaseInterface } from 'src/data/abstract/usecases/user/getOneUserUseCase-interface';
import { User } from 'src/domain/entities/user';
import { UserRepositoryInterface } from 'src/infra/abstract/repositories/userRepository-interface';

export class GetOneUserUseCase implements GetOneUserUseCaseInterface {
  private readonly repository: UserRepositoryInterface;

  public constructor(repository: UserRepositoryInterface) {
    this.repository = repository;
  }

  public execute(userId: string, restaurantId: string): Promise<User> {
    const data = this.repository.getOneById(userId, restaurantId);

    return data;
  }
}
