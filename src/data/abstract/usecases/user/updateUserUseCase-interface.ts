import { UpdateUserDto } from 'src/domain/dto/user/updateUser-dto';
import { User } from 'src/domain/entities/user';

export interface UpdateUserUseCaseInterface {
  execute(updateUserDto: UpdateUserDto): Promise<User>;
}
