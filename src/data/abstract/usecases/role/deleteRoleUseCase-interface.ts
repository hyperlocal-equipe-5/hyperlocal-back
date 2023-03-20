import { Role } from 'src/domain/entities/role';

export interface DeleteRoleUseCaseInterface {
  execute(roleId: string, restaurantId: string): Promise<Role>;
}
