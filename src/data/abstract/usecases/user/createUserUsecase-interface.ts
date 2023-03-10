import { CreateUserDto } from 'src/domain/dto/user/createUser-dto';
import { User } from 'src/domain/entities/user';

export interface CreateUserUseCaseInterface {
  execute(createUserDto: CreateUserDto): Promise<User>;
}
