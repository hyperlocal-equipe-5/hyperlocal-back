import { MakeLoginUseCase } from 'src/data/usecases/login/makeLogin-usecase';
import { GetOneUserUseCase } from 'src/data/usecases/user/getOneUser-usecase';
import { UserRepository } from 'src/infra/repositories/user-repository';
import { MakeLoginControllerInterface } from 'src/presentation/abstract/controllers/login/makeLoginController-interface';
import { MakeLoginController } from 'src/presentation/controllers/login/makeLogin-controller';
import { HasherAdapter } from 'src/utils/adapters/hasher-adapter';
import { TokenHandlerAdapter } from 'src/utils/adapters/tokenHandler-adapter';

export function MakeLoginFactory(): MakeLoginControllerInterface {
  const repository = new UserRepository();
  const hasher = new HasherAdapter();
  const getOneUserUseCaseInterface = new GetOneUserUseCase(repository);
  const tokenHandler = new TokenHandlerAdapter(getOneUserUseCaseInterface);
  const makeLoginUsecase = new MakeLoginUseCase(
    repository,
    hasher,
    tokenHandler,
  );

  return new MakeLoginController(makeLoginUsecase);
}
