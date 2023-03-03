import { Role } from 'src/domain/entities/role';

export interface RoleEntityInterface {
  validate(): void;
  getBody(): Role;
  updateBody(): Role;
}
