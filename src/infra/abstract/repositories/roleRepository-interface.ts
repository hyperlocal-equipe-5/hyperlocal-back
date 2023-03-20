import { Role } from 'src/domain/entities/role';
import { RoleType } from 'src/domain/types/role-type';

export interface RoleRepositoryInterface {
  create(roleBody: RoleType): Promise<Role>;
  delete(roleId: string, restaurantId: string): Promise<Role>;
  getOne(roleId: string, restaurantId: string): Promise<Role>;
  getAll(roleId: string): Promise<Role[]>;
  update(roleBody: RoleType): Promise<Role>;
}
