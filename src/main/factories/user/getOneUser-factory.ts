import { GetOneUserUseCase } from 'src/data/usecases/user/getOneUser-usecase';
import { UserRepository } from 'src/infra/repositories/user-repository';
import { GetOneUserControllerInterface } from 'src/presentation/abstract/controllers/user/getOneUserController-interface';
import { GetOneUserController } from 'src/presentation/controllers/user/getOneUser-controller';

export function makeGetOneUserFactory(): GetOneUserControllerInterface {
  const repository = new UserRepository();
  const getOneUserUseCase = new GetOneUserUseCase(repository);

  return new GetOneUserController(getOneUserUseCase);
}
