import { CreateRoleDto } from 'src/domain/dto/role/createRole-dto';
import { UpdateRoleDto } from 'src/domain/dto/role/updateRole-dto';
import { Role } from 'src/domain/entities/role';
import { RoleType } from '../../../domain/types/role-type';

export interface RoleEntityInterface {
  setData(roleDto: CreateRoleDto | UpdateRoleDto): void;
  validate(): void;
  getBody(): RoleType;
  updateBody(mainRole: Role): RoleType;
}
