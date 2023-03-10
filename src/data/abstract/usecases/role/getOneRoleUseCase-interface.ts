import { Role } from 'src/domain/entities/role';

export interface GetOneRoleUseCaseInterface {
  execute(roleId: string, restaurantId: string): Promise<Role>;
}
