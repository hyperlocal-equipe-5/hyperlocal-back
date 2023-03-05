import { GetOneRoleUseCaseInterface } from 'src/data/abstract/usecases/role/getOneRoleUseCase-interface';
import { Role } from 'src/domain/entities/role';

export class GetOneRoleUseCase implements GetOneRoleUseCaseInterface {
  public execute(roleId: string, restaurantId: string): Promise<Role> {
    throw new Error('Method not implemented.');
  }
}
