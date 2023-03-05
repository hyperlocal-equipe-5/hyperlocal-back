import { DeleteRoleUseCaseInterface } from 'src/data/abstract/usecases/role/deleteRoleUseCase-interface';
import { Role } from 'src/domain/entities/role';

export class DeleteRoleUseCase implements DeleteRoleUseCaseInterface {
  public execute(roleId: string, restaurantId: string): Promise<Role> {
    throw new Error('Method not implemented.');
  }
}
