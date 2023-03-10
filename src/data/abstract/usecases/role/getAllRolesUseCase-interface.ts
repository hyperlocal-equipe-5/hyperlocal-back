import { Role } from 'src/domain/entities/role';

export interface GetAllRolesUseCaseInterface {
  execute(restaurantId: string): Promise<Role[]>;
}
