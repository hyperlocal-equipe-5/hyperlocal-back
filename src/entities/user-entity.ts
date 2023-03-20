import { CreateUserDto } from 'src/domain/dto/user/createUser-dto';
import { UpdateUserDto } from 'src/domain/dto/user/updateUser-dto';
import { User } from 'src/domain/entities/user';
import { HasherAdapterInterface } from 'src/utils/abstract/adapters/hasherAdapter-interface';
import { IdGeneratorAdapterInterface } from 'src/utils/abstract/adapters/idGeneratorAdapter-interface';
import { MissingParamError } from 'src/utils/errors/missingParam-error';
import { UserEntityInterface } from './abstract/interfaces/userEntity-interface';
import { UserType } from '../domain/types/user-type';
import { Entity } from './entity';
import { InvalidParamError } from 'src/utils/errors/invalidParam-error';

export class UserEntity extends Entity implements UserEntityInterface {
  private userDto: CreateUserDto | UpdateUserDto;
  private readonly idGeneratorAdapter: IdGeneratorAdapterInterface;
  private readonly hasherAdapter: HasherAdapterInterface;

  public constructor(
    idGeneratorAdapter: IdGeneratorAdapterInterface,
    hasherAdapter: HasherAdapterInterface,
  ) {
    super();

    this.idGeneratorAdapter = idGeneratorAdapter;
    this.hasherAdapter = hasherAdapter;
  }

  public setData(userDto: CreateUserDto | UpdateUserDto): void {
    this.userDto = userDto;
  }

  public validate(): void {
    if (!this.userDto.name) {
      throw new MissingParamError('name');
    }

    if (!this.userDto.email) {
      throw new MissingParamError('email');
    }

    if (!this.emailValidator(this.userDto.email).result) {
      throw new InvalidParamError(
        this.emailValidator(this.userDto.email).message,
      );
    }

    if (!this.userDto.password) {
      throw new MissingParamError('password');
    }

    if (!this.passwordValidator(this.userDto.password).result) {
      throw new InvalidParamError(
        this.passwordValidator(this.userDto.password).message,
      );
    }

    if (!this.userDto.restaurant) {
      throw new MissingParamError('restaurant');
    }
  }

  public getBody(): UserType {
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
      createdAt: this.getDate(),
      updatedAt: this.getDate(),
    };
  }

  public updateBody(mainUser: User): UserType {
    return {
      id: mainUser.id,
      name: this.userDto.name ?? mainUser.name,
      email: this.userDto.email ?? mainUser.email,
      password: this.userDto.password
        ? this.hasherAdapter.hash(this.userDto.password, 10)
        : mainUser.password,
      image: this.userDto.image ?? mainUser.image,
      cellphone: this.userDto.cellphone ?? mainUser.cellphone,
      role: this.userDto.role
        ? this.userDto.role
        : mainUser.role
        ? mainUser.role.id
        : '',
      restaurant: mainUser.restaurant.id,
      createdAt: this.getDate(),
      updatedAt: this.getDate(),
    };
  }

  private passwordValidator(password: string): {
    result: boolean;
    message: string;
  } {
    const response = { result: true, message: '' };

    if (!password || password.length < 6) {
      response.result = false;
      response.message =
        'Your password should be, at least, 6 characters long.';
    }

    if (password.match(/[0-9]/gi) === null) {
      response.result = false;
      response.message = 'Your password should have, at least, 1 number.';
    }

    if (password.match(/[A-Z]/g) === null) {
      response.result = false;
      response.message =
        'Your password should have, at least, 1 uppercase letter.';
    }

    if (password.match(/[a-z]/g) === null) {
      response.result = false;
      response.message =
        'Your password should have, at least, 1 lowercase letter.';
    }

    return response;
  }
}
