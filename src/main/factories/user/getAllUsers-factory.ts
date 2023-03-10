import { GetAllUsersUseCase } from 'src/data/usecases/user/getAllUsers-usecase';
import { UserRepository } from 'src/infra/repositories/user-repository';
import { GetAllUsersControllerInterface } from 'src/presentation/abstract/controllers/user/getAllUsersController-interface';
import { GetAllUsersController } from 'src/presentation/controllers/user/getAllUsers-controller';

export function makeGetAllUserFactory(): GetAllUsersControllerInterface {
  const repository = new UserRepository();
  const getAllusersUseCase = new GetAllUsersUseCase(repository);

  return new GetAllUsersController(getAllusersUseCase);
}
