import { CreateUserUseCaseInterface } from 'src/data/abstract/usecases/user/createUserUsecase-interface';
import { CreateUserDto } from 'src/domain/dto/user/createUser-dto';
import { User } from 'src/domain/entities/user';
import { UserEntityInterface } from 'src/entities/abstract/interfaces/userEntity-interface';
import { UserRepositoryInterface } from 'src/infra/abstract/repositories/userRepository-interface';

export class CreateUserUseCase implements CreateUserUseCaseInterface {
  private readonly entity: UserEntityInterface;
  private readonly repository: UserRepositoryInterface;

  public async execute(createUserDto: CreateUserDto): Promise<User> {
    this.entity.setData(createUserDto);

    const body = this.entity.getBody();
    const response = await this.repository.create(body);

    return response;
  }
}
