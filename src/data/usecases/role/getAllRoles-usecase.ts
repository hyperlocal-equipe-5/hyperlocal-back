import { GetAllRolesUseCaseInterface } from 'src/data/abstract/usecases/role/getAllRolesUseCase-interface';
import { Role } from 'src/domain/entities/role';

export class GetAllRolesUseCase implements GetAllRolesUseCaseInterface {
  public execute(restaurantId: string): Promise<Role[]> {
    throw new Error('Method not implemented.');
  }
}
