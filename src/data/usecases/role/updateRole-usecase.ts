import { UpdateRoleUseCaseInterface } from 'src/data/abstract/usecases/role/updateRoleUseCase-interface';
import { UpdateRoleDto } from 'src/domain/dto/role/updateRole-dto';
import { Role } from 'src/domain/entities/role';

export class UpdateRoleUseCase implements UpdateRoleUseCaseInterface {
  public execute(updateRoleAdminRequestBody: UpdateRoleDto): Promise<Role> {
    throw new Error('Method not implemented.');
  }
}
