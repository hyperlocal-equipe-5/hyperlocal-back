import { CreateUserUseCase } from 'src/data/usecases/user/createUser-usecase';
import { UserEntity } from 'src/entities/user-entity';
import { UserRepository } from 'src/infra/repositories/user-repository';
import { CreateUserControllerInterface } from 'src/presentation/abstract/controllers/user/createUserController-interface';
import { CreateUserController } from 'src/presentation/controllers/user/createUser-controller';
import { HasherAdapter } from 'src/utils/adapters/hasher-adapter';
import { IdGeneratorAdapter } from 'src/utils/adapters/idGenerator-adapter';

export function makeCreateUserFactory(): CreateUserControllerInterface {
  const idGeneratorAdapter = new IdGeneratorAdapter();
  const hasherAdapter = new HasherAdapter();
  const entity = new UserEntity(idGeneratorAdapter, hasherAdapter);
  const repository = new UserRepository();
  const createUserUseCase = new CreateUserUseCase(entity, repository);

  return new CreateUserController(createUserUseCase);
}
