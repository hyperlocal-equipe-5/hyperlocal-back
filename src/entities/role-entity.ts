import { CreateRoleDto } from 'src/domain/dto/role/createRole-dto';
import { UpdateRoleDto } from 'src/domain/dto/role/updateRole-dto';
import { Role } from 'src/domain/entities/role';
import { IdGeneratorAdapterInterface } from 'src/utils/adapters/abstract/idGeneratorAdapter-interface';
import { MissingParamError } from 'src/utils/errors/missingParam-error';
import { RoleEntityInterface } from './abstract/interfaces/roleEntity-interface';
import { RoleType } from '../domain/types/role-type';
import { Entity } from './entity';

export class RoleEntity extends Entity implements RoleEntityInterface {
  private roleDto: CreateRoleDto | UpdateRoleDto;
  private readonly idGeneratorAdapter: IdGeneratorAdapterInterface;

  public constructor(idGeneratorAdapter: IdGeneratorAdapterInterface) {
    super();
    this.idGeneratorAdapter = idGeneratorAdapter;
  }

  public setData(roleDto: CreateRoleDto | UpdateRoleDto) {
    this.roleDto = roleDto;
  }

  public validate(): void {
    if (!this.roleDto.name) {
      throw new MissingParamError('name');
    }

    if (!this.roleDto.restaurant) {
      throw new MissingParamError('restaurant');
    }
  }

  public getBody(): RoleType {
    return {
      id: this.idGeneratorAdapter.generateId(),
      name: this.roleDto.name ?? '',
      access: this.roleDto.access ?? {},
      restaurant: this.roleDto.restaurant,
      createdOn: this.getDate(),
      updatedOn: this.getDate(),
    };
  }

  public updateBody(mainRole: Role): RoleType {
    return {
      id: mainRole.id,
      name: this.roleDto.name ?? mainRole.name,
      restaurant: this.roleDto.restaurant,
      access: this.roleDto.access ?? mainRole.access,
      createdOn: mainRole.createdOn,
      updatedOn: this.getDate(),
    };
  }
}
