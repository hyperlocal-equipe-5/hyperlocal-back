import { GetOneUserUseCase } from 'src/data/usecases/user/getOneUser-usecase';
import { UserRepository } from 'src/infra/repositories/user-repository';
import { AuthMiddlewareInterface } from 'src/presentation/abstract/middlewares/authMiddleware-interface';
import { AuthMiddleware } from 'src/presentation/middlewares/auth-middleware';
import { TokenHandlerAdapter } from 'src/utils/adapters/tokenHandler-adapter';

export function makeAuthMiddlewareFactory(): AuthMiddlewareInterface {
  const repository = new UserRepository();
  const getOneUserUseCaseInterface = new GetOneUserUseCase(repository);
  const tokenHandler = new TokenHandlerAdapter(getOneUserUseCaseInterface);

  return new AuthMiddleware(tokenHandler);
}
