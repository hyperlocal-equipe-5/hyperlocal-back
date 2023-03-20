import { UpdateUserUseCase } from 'src/data/usecases/user/updateUser-usecase';
import { UserEntity } from 'src/entities/user-entity';
import { UserRepository } from 'src/infra/repositories/user-repository';
import { UpdateUserControllerInterface } from 'src/presentation/abstract/controllers/user/updateUserController-interface';
import { UpdateUserController } from 'src/presentation/controllers/user/updateUser-controller';
import { HasherAdapter } from 'src/utils/adapters/hasher-adapter';
import { IdGeneratorAdapter } from 'src/utils/adapters/idGenerator-adapter';

export function makeUpdateUserFactory(): UpdateUserControllerInterface {
  const idGeneratorAdapter = new IdGeneratorAdapter();
  const hasherAdapter = new HasherAdapter();
  const entity = new UserEntity(idGeneratorAdapter, hasherAdapter);
  const repository = new UserRepository();
  const updateUserUseCase = new UpdateUserUseCase(entity, repository);

  return new UpdateUserController(updateUserUseCase);
}
