import { CreateRoleUseCaseInterface } from 'src/data/abstract/usecases/role/createRoleUseCase-interface';
import { CreateRoleDto } from 'src/domain/dto/role/createRole-dto';
import { Role } from 'src/domain/entities/role';
import { RoleEntityInterface } from 'src/entities/abstract/interfaces/roleEntity-interface';
import { RoleRepositoryInterface } from 'src/infra/abstract/repositories/roleRepository-interface';

export class CreateRoleUseCase implements CreateRoleUseCaseInterface {
  private readonly entity: RoleEntityInterface;
  private readonly repository: RoleRepositoryInterface;

  public constructor(
    entity: RoleEntityInterface,
    repository: RoleRepositoryInterface,
  ) {
    this.entity = entity;
    this.repository = repository;
  }

  public async execute(createRoleDto: CreateRoleDto): Promise<Role> {
    this.entity.setData(createRoleDto);
    this.entity.validate();

    const body = this.entity.getBody();
    const response = await this.repository.create(body);

    return response;
  }
}
