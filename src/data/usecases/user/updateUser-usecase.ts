import { UpdateUserUseCaseInterface } from 'src/data/abstract/usecases/user/updateUserUseCase-interface';
import { UpdateUserDto } from 'src/domain/dto/user/updateUser-dto';
import { User } from 'src/domain/entities/user';

export class UpdateUserUseCase implements UpdateUserUseCaseInterface {
  public execute(updateUserDto: UpdateUserDto): Promise<User> {
    throw new Error('Method not implemented.');
  }
}
