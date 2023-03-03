import { CreateRoleDto } from 'src/domain/dto/role/createRole-dto';
import { UpdateRoleDto } from 'src/domain/dto/role/updateRole-dto';
import { Role } from 'src/domain/entities/role';
import { RoleEntityInterface } from './abstract/roleEntity-interface';

export class RoleEntity implements RoleEntityInterface {
  constructor(private readonly roleDto: CreateRoleDto | UpdateRoleDto) {}

  validate(): void {
    throw new Error('Method not implemented.');
  }

  getBody(): Role {
    throw new Error('Method not implemented.');
  }

  updateBody(mainRole: Role): Role {
    throw new Error('Method not implemented.');
  }
}
