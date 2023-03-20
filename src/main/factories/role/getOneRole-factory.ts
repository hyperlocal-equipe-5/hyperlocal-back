import { GetOneRoleUseCase } from 'src/data/usecases/role/getOneRole-usecase';
import { RoleRepository } from 'src/infra/repositories/role-repository';
import { GetOneRoleInterface } from 'src/presentation/abstract/controllers/role/getOneRoleController-interface';
import { GetOneRoleController } from 'src/presentation/controllers/role/getOneRole-controller';

export function makeGetOneRoleFactory(): GetOneRoleInterface {
  const repository = new RoleRepository();
  const getOneRoleUseCase = new GetOneRoleUseCase(repository);

  return new GetOneRoleController(getOneRoleUseCase);
}
