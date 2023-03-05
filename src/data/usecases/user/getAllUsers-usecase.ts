import { GetAllUsersUseCaseInterface } from 'src/data/abstract/usecases/user/getAllUsersUseCase-interface';
import { User } from 'src/domain/entities/user';
import { UserRepositoryInterface } from 'src/infra/abstract/repositories/userRepository-interface';

export class GetAllUsersUseCase implements GetAllUsersUseCaseInterface {
  private readonly repository: UserRepositoryInterface;

  public constructor(repository: UserRepositoryInterface) {
    this.repository = repository;
  }

  public async execute(restaurantId: string): Promise<User[]> {
    const data = await this.repository.getAll(restaurantId);

    return data;
  }
}
