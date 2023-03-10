import { GetAllRolesUseCase } from 'src/data/usecases/role/getAllRoles-usecase';
import { RoleRepository } from 'src/infra/repositories/role-repository';
import { GetAllRolesInterface } from 'src/presentation/abstract/controllers/role/getAllRolesController-interface';
import { GetAllRolesController } from 'src/presentation/controllers/role/getAllRoles-controller';

export function makeGetAllRoleFactory(): GetAllRolesInterface {
  const repository = new RoleRepository();
  const getAllrolesUseCase = new GetAllRolesUseCase(repository);

  return new GetAllRolesController(getAllrolesUseCase);
}
