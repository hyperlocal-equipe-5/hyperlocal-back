import { DeleteRoleUseCaseInterface } from 'src/data/abstract/usecases/role/deleteRoleUseCase-interface';
import { Role } from 'src/domain/entities/role';
import { RoleRepositoryInterface } from 'src/infra/abstract/repositories/roleRepository-interface';

export class DeleteRoleUseCase implements DeleteRoleUseCaseInterface {
  private readonly repository: RoleRepositoryInterface;

  public constructor(repository: RoleRepositoryInterface) {
    this.repository = repository;
  }

  public execute(roleId: string, restaurantId: string): Promise<Role> {
    const deleted = this.repository.delete(roleId, restaurantId);

    return deleted;
  }
}
