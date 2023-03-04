import { Role } from 'src/domain/entities/role';
import { RoleType } from '../types/role-type';

export interface RoleEntityInterface {
  validate(): void;
  getBody(): RoleType;
  updateBody(mainRole: Role): RoleType;
}
