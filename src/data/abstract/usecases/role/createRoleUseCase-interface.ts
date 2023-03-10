import { CreateRoleDto } from 'src/domain/dto/role/createRole-dto';
import { Role } from 'src/domain/entities/role';

export interface CreateRoleUseCaseInterface {
  execute(createRoleDto: CreateRoleDto): Promise<Role>;
}
