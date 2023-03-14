import { DeleteUserUseCaseInterface } from 'src/data/abstract/usecases/user/deleteUserUseCase-interface';
import { User } from 'src/domain/entities/user';
import { UserRepositoryInterface } from 'src/infra/abstract/repositories/userRepository-interface';
import { InvalidParamError } from 'src/utils/errors/invalidParam-error';

export class DeleteUserUseCase implements DeleteUserUseCaseInterface {
  private readonly repository: UserRepositoryInterface;

  public constructor(repository: UserRepositoryInterface) {
    this.repository = repository;
  }

  public async execute(userId: string, restaurantId: string): Promise<User> {
    const fountEntity = await this.repository.getOneById(userId, restaurantId);

    if (fountEntity === null) {
      throw new InvalidParamError('Id');
    }

    const deleted = await this.repository.delete(userId, restaurantId);

    return deleted;
  }
}
