import { CreateRoleUseCaseInterface } from 'src/data/abstract/usecases/role/createRoleUseCase-interface';
import { CreateRoleDto } from 'src/domain/dto/role/createRole-dto';
import { Role } from 'src/domain/entities/role';

export class CreateRoleUseCase implements CreateRoleUseCaseInterface {
  public execute(createRoleDto: CreateRoleDto): Promise<Role> {
    throw new Error('Method not implemented.');
  }
}
