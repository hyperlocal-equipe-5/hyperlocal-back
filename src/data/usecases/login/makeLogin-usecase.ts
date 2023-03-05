import { MakeLoginUseCaseInterface } from 'src/data/abstract/usecases/login/makeLoginUseCase-interface';
import { LoginDto } from 'src/domain/dto/login/login-dto';
import { LoggedType } from 'src/domain/types/logged-type';
import { UserRepositoryInterface } from 'src/infra/abstract/repositories/userRepository-interface';
import { HasherAdapterInterface } from 'src/utils/adapters/abstract/hasherAdapter-interface';
import { TokenHandlerAdapterInterface } from 'src/utils/adapters/abstract/tokenHandlerAdapter-interface';
import { InvalidParamError } from 'src/utils/errors/invalidParam-error';

export class MakeLoginUseCase implements MakeLoginUseCaseInterface {
  private readonly repository: UserRepositoryInterface;
  private readonly hasher: HasherAdapterInterface;
  private readonly tokenHandler: TokenHandlerAdapterInterface;

  constructor(
    repository: UserRepositoryInterface,
    hasher: HasherAdapterInterface,
    tokenHandler: TokenHandlerAdapterInterface,
  ) {
    this.repository = repository;
    this.hasher = hasher;
    this.tokenHandler = tokenHandler;
  }

  public async execute(loginDto: LoginDto): Promise<LoggedType> {
    const foundUser = await this.repository.getOneByEmail(loginDto.email);
    const secret = process.env.SECRET;

    if (foundUser) {
      const comparison = this.hasher.compare(
        loginDto.password,
        foundUser.password,
      );

      if (comparison) {
        const token = this.tokenHandler.generateToken(foundUser.id, secret);

        return {
          token,
          user: foundUser,
        };
      } else {
        throw new InvalidParamError('password');
      }
    } else {
      throw new InvalidParamError('email');
    }
  }
}
