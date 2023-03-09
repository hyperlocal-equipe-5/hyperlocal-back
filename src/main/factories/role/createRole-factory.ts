import { CreateRoleUseCase } from 'src/data/usecases/role/createRole-usecase';
import { RoleEntity } from 'src/entities/role-entity';
import { RoleRepository } from 'src/infra/repositories/role-repository';
import { CreateRoleInterface } from 'src/presentation/abstract/controllers/role/createRoleController-interface';
import { CreateRoleController } from 'src/presentation/controllers/role/createRole-controller';
import { IdGeneratorAdapter } from 'src/utils/adapters/idGenerator-adapter';

export function makeCreateRoleFactory(): CreateRoleInterface {
  const idGeneratorAdapter = new IdGeneratorAdapter();
  const entity = new RoleEntity(idGeneratorAdapter);
  const repository = new RoleRepository();
  const createRoleUseCase = new CreateRoleUseCase(entity, repository);

  return new CreateRoleController(createRoleUseCase);
}
