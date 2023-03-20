import { DeleteRoleUseCaseInterface } from 'src/data/abstract/usecases/role/deleteRoleUseCase-interface';
import { Role } from 'src/domain/entities/role';
import { RoleRepositoryInterface } from 'src/infra/abstract/repositories/roleRepository-interface';
import { InvalidParamError } from 'src/utils/errors/invalidParam-error';

export class DeleteRoleUseCase implements DeleteRoleUseCaseInterface {
  private readonly repository: RoleRepositoryInterface;

  public constructor(repository: RoleRepositoryInterface) {
    this.repository = repository;
  }

  public async execute(roleId: string, restaurantId: string): Promise<Role> {
    const fountEntity = await this.repository.getOne(roleId, restaurantId);

    if (fountEntity === null) {
      throw new InvalidParamError('Id');
    }

    const deleted = await this.repository.delete(roleId, restaurantId);

    return deleted;
  }
}
