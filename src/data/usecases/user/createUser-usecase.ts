import { CreateUserUseCaseInterface } from 'src/data/abstract/usecases/user/createUserUsecase-interface';
import { CreateUserDto } from 'src/domain/dto/user/createUser-dto';
import { User } from 'src/domain/entities/user';

export class CreateUserUseCase implements CreateUserUseCaseInterface {
  public execute(createUserDto: CreateUserDto): Promise<User> {
    throw new Error('Method not implemented.');
  }
}
