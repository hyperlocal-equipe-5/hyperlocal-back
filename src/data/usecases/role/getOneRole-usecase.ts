import { GetOneRoleUseCaseInterface } from 'src/data/abstract/usecases/role/getOneRoleUseCase-interface';
import { Role } from 'src/domain/entities/role';
import { RoleRepositoryInterface } from 'src/infra/abstract/repositories/roleRepository-interface';

export class GetOneRoleUseCase implements GetOneRoleUseCaseInterface {
  private readonly repository: RoleRepositoryInterface;

  public constructor(repository: RoleRepositoryInterface) {
    this.repository = repository;
  }

  public async execute(roleId: string, restaurantId: string): Promise<Role> {
    const data = await this.repository.getOne(roleId, restaurantId);

    return data;
  }
}
