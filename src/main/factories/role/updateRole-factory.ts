import { UpdateRoleUseCase } from 'src/data/usecases/role/updateRole-usecase';
import { RoleEntity } from 'src/entities/role-entity';
import { RoleRepository } from 'src/infra/repositories/role-repository';
import { UpdateRoleInterface } from 'src/presentation/abstract/controllers/role/updateRoleController-interface';
import { UpdateRoleController } from 'src/presentation/controllers/role/updateRole-controller';
import { IdGeneratorAdapter } from 'src/utils/adapters/idGenerator-adapter';

export function makeUpdateRoleFactory(): UpdateRoleInterface {
  const idGeneratorAdapter = new IdGeneratorAdapter();
  const entity = new RoleEntity(idGeneratorAdapter);
  const repository = new RoleRepository();
  const updateRoleUseCase = new UpdateRoleUseCase(entity, repository);

  return new UpdateRoleController(updateRoleUseCase);
}
