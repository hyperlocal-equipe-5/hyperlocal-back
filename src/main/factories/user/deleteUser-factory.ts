import { DeleteUserUseCase } from 'src/data/usecases/user/deleteUser-usecase';
import { UserRepository } from 'src/infra/repositories/user-repository';
import { DeleteUserControllerInterface } from 'src/presentation/abstract/controllers/user/deleteUserController-interface';
import { DeleteUserController } from 'src/presentation/controllers/user/deleteUser-controller';

export function makeDeleteUserFactory(): DeleteUserControllerInterface {
  const repository = new UserRepository();
  const deleteUserUseCase = new DeleteUserUseCase(repository);

  return new DeleteUserController(deleteUserUseCase);
}
