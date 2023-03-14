import { UpdateRoleUseCaseInterface } from 'src/data/abstract/usecases/role/updateRoleUseCase-interface';
import { UpdateRoleDto } from 'src/domain/dto/role/updateRole-dto';
import { Role } from 'src/domain/entities/role';
import { RoleEntityInterface } from 'src/entities/abstract/interfaces/roleEntity-interface';
import { RoleRepositoryInterface } from 'src/infra/abstract/repositories/roleRepository-interface';
import { InvalidParamError } from 'src/utils/errors/invalidParam-error';

export class UpdateRoleUseCase implements UpdateRoleUseCaseInterface {
  private readonly entity: RoleEntityInterface;
  private readonly repository: RoleRepositoryInterface;

  public constructor(
    entity: RoleEntityInterface,
    repository: RoleRepositoryInterface,
  ) {
    this.entity = entity;
    this.repository = repository;
  }

  public async execute(updateRoleDto: UpdateRoleDto): Promise<Role> {
    this.entity.setData(updateRoleDto);

    const { id, restaurant } = updateRoleDto;
    const fountEntity = await this.repository.getOne(id, restaurant);

    if (fountEntity === null) {
      throw new InvalidParamError('Id');
    }

    const body = this.entity.updateBody(fountEntity);
    const response = await this.repository.update(body);

    return response;
  }
}
