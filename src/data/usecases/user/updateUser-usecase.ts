import { UpdateUserUseCaseInterface } from 'src/data/abstract/usecases/user/updateUserUseCase-interface';
import { UpdateUserDto } from 'src/domain/dto/user/updateUser-dto';
import { User } from 'src/domain/entities/user';
import { UserEntityInterface } from 'src/entities/abstract/interfaces/userEntity-interface';
import { UserRepositoryInterface } from 'src/infra/abstract/repositories/userRepository-interface';
import { InvalidParamError } from 'src/utils/errors/invalidParam-error';

export class UpdateUserUseCase implements UpdateUserUseCaseInterface {
  private readonly entity: UserEntityInterface;
  private readonly repository: UserRepositoryInterface;

  public constructor(
    entity: UserEntityInterface,
    repository: UserRepositoryInterface,
  ) {
    this.entity = entity;
    this.repository = repository;
  }

  public async execute(updateUserDto: UpdateUserDto): Promise<User> {
    this.entity.setData(updateUserDto);

    const { id, restaurant } = updateUserDto;
    const fountEntity = await this.repository.getOneById(id, restaurant);

    if (fountEntity === null) {
      throw new InvalidParamError('Id');
    }

    const body = this.entity.updateBody(fountEntity);
    const response = await this.repository.update(body);

    return response;
  }
}
