import { RecoverPasswordUseCaseInterface } from 'src/data/abstract/usecases/passwordRecovery/recoverPasswordUseCase-interface';
import { UpdatePasswordDto } from 'src/domain/dto/passwordRecovery/updatePassword-dto';
import { User } from 'src/domain/entities/user';
import { UserEntity } from 'src/entities/user-entity';
import { PasswordRecoveryRepositoryInterface } from 'src/infra/abstract/repositories/passwordRecoveryRepository-interface';
import { UserRepositoryInterface } from 'src/infra/abstract/repositories/userRepository-interface';
import { InvalidParamError } from 'src/utils/errors/invalidParam-error';

export class RecoverPasswordUseCase implements RecoverPasswordUseCaseInterface {
  private readonly passwordRecoveryRepository: PasswordRecoveryRepositoryInterface;
  private readonly userRepository: UserRepositoryInterface;
  private readonly userEntity: UserEntity;

  public constructor(
    passwordRecoveryRepository: PasswordRecoveryRepositoryInterface,
    userRepository: UserRepositoryInterface,
    userEntity: UserEntity,
  ) {
    this.passwordRecoveryRepository = passwordRecoveryRepository;
    this.userRepository = userRepository;
    this.userEntity = userEntity;
  }

  public async execute(updatePasswordDto: UpdatePasswordDto): Promise<User> {
    const { email, password, token } = updatePasswordDto;

    const validationToken = await this.passwordRecoveryRepository
      .getOne(token)
      .then((data) => {
        this.passwordRecoveryRepository.deleteByToken(token);

        return data;
      });

    if (validationToken === null) {
      throw new InvalidParamError('Token');
    }

    const foundUser = await this.userRepository.getOneByEmail(email);

    if (foundUser === null) {
      throw new InvalidParamError('Email');
    }

    const newUser = this.userEntity;
    newUser.setData({
      ...foundUser,
      role: foundUser.role.id,
      restaurant: foundUser.restaurant.id,
      password,
    });
    const updatedUser = newUser.updateBody(foundUser);

    const response = await this.userRepository.update(updatedUser);

    return response;
  }
}
