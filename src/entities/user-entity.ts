import { CreateUserDto } from 'src/domain/dto/user/createUser-dto';
import { UpdateUserDto } from 'src/domain/dto/user/updateUser-dto';
import { User } from 'src/domain/entities/user';
import { HasherAdapterInterface } from 'src/utils/adapters/abstract/hasherAdapter-interface';
import { IdGeneratorAdapterInterface } from 'src/utils/adapters/abstract/idGeneratorAdapter-interface';
import { MissingParamError } from 'src/utils/errors/missingParam-error';
import { UserEntityInterface } from './abstract/interfaces/userEntity-interface';
import { UserType } from '../domain/types/user-type';
import { Entity } from './entity';

export class UserEntity extends Entity implements UserEntityInterface {
  private readonly userDto: CreateUserDto | UpdateUserDto;
  private readonly idGeneratorAdapter: IdGeneratorAdapterInterface;
  private readonly hasherAdapter: HasherAdapterInterface;

  constructor(
    userDto: CreateUserDto | UpdateUserDto,
    idGeneratorAdapter: IdGeneratorAdapterInterface,
    hasherAdapter: HasherAdapterInterface,
  ) {
    super();
    this.userDto = userDto;
    this.idGeneratorAdapter = idGeneratorAdapter;
    this.hasherAdapter = hasherAdapter;
  }

  validate(): void {
    if (!this.userDto.name) {
      throw new MissingParamError('name');
    }

    if (!this.userDto.email) {
      throw new MissingParamError('email');
    }

    if (!this.userDto.password) {
      throw new MissingParamError('password');
    }

    if (!this.userDto.restaurant) {
      throw new MissingParamError('restaurant');
    }
  }

  getBody(): UserType {
    return {
      id: this.idGeneratorAdapter.generateId(),
      name: this.userDto.name ?? '',
      email: this.userDto.email ?? '',
      password: this.userDto.password
        ? this.hasherAdapter.hash(this.userDto.password, 10)
        : '',
      image: this.userDto.image ?? '',
      cellphone: this.userDto.cellphone ?? 0,
      role: this.userDto.role ?? '',
      restaurant: this.userDto.restaurant,
      createdOn: this.getDate(),
      updatedOn: this.getDate(),
    };
  }

  updateBody(mainUser: User): UserType {
    return {
      id: this.idGeneratorAdapter.generateId(),
      name: this.userDto.name ?? mainUser.name,
      email: this.userDto.email ?? mainUser.email,
      password: this.userDto.password
        ? this.hasherAdapter.hash(this.userDto.password, 10)
        : mainUser.password,
      image: this.userDto.image ?? mainUser.image,
      cellphone: this.userDto.cellphone ?? mainUser.cellphone,
      role: this.userDto.role ?? mainUser.role.id,
      restaurant: this.userDto.restaurant,
      createdOn: this.getDate(),
      updatedOn: this.getDate(),
    };
  }
}
