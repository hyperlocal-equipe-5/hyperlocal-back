import { DeleteUserUseCaseInterface } from 'src/data/abstract/usecases/user/deleteUserUseCase-interface';
import { User } from 'src/domain/entities/user';
import { UserRepositoryInterface } from 'src/infra/abstract/repositories/userRepository-interface';

export class DeleteUserUseCase implements DeleteUserUseCaseInterface {
  private readonly repository: UserRepositoryInterface;

  public constructor(repository: UserRepositoryInterface) {
    this.repository = repository;
  }

  public execute(userId: string, restaurantId: string): Promise<User> {
    const deleted = this.repository.delete(userId, restaurantId);

    return deleted;
  }
}
