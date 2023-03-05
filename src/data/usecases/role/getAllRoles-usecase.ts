import { GetAllRolesUseCaseInterface } from 'src/data/abstract/usecases/role/getAllRolesUseCase-interface';
import { Role } from 'src/domain/entities/role';
import { RoleRepositoryInterface } from 'src/infra/abstract/repositories/roleRepository-interface';

export class GetAllRolesUseCase implements GetAllRolesUseCaseInterface {
  private readonly repository: RoleRepositoryInterface;

  public constructor(repository: RoleRepositoryInterface) {
    this.repository = repository;
  }

  public async execute(restaurantId: string): Promise<Role[]> {
    const data = await this.repository.getAll(restaurantId);

    return data;
  }
}
