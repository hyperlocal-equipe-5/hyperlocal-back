import { DeleteRoleUseCase } from 'src/data/usecases/role/deleteRole-usecase';
import { RoleRepository } from 'src/infra/repositories/role-repository';
import { DeleteRoleInterface } from 'src/presentation/abstract/controllers/role/deleteRoleController-interface';
import { DeleteRoleController } from 'src/presentation/controllers/role/deleteRole-controller';

export function makeDeleteRoleFactory(): DeleteRoleInterface {
  const repository = new RoleRepository();
  const deleteRoleUseCase = new DeleteRoleUseCase(repository);

  return new DeleteRoleController(deleteRoleUseCase);
}
