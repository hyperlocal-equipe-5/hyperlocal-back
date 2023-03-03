import { CreateRoleDto } from 'src/domain/dto/role/createRole-dto';
import { UpdateRoleDto } from 'src/domain/dto/role/updateRole-dto';
import { Role } from 'src/domain/entities/role';

export interface RoleEntityInterface {
  validate(): void;
  getBody(): Role;
  updateBody(mainRole: Role): Role;
}
