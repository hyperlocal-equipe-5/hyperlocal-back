import { SendPasswordRecoveryEmailUseCaseInterface } from 'src/data/abstract/usecases/passwordRecovery/sendPasswordRecoveryEmailUseCase-interface';
import { PasswordRecoveryRepositoryInterface } from 'src/infra/abstract/repositories/passwordRecoveryRepository-interface';
import { UserRepositoryInterface } from 'src/infra/abstract/repositories/userRepository-interface';
import { IdGeneratorAdapterInterface } from 'src/utils/abstract/adapters/idGeneratorAdapter-interface';
import { MailerAdapterInterface } from 'src/utils/abstract/adapters/mailerAdapter-interface';
import { InvalidParamError } from 'src/utils/errors/invalidParam-error';

export class SendPasswordRecoveryEmailUseCase
  implements SendPasswordRecoveryEmailUseCaseInterface
{
  private readonly passwordRecoveryRepository: PasswordRecoveryRepositoryInterface;
  private readonly userRepository: UserRepositoryInterface;
  private readonly idGeneratorAdapter: IdGeneratorAdapterInterface;
  private readonly mailerAdapter: MailerAdapterInterface;

  public constructor(
    passwordRecoveryRepository: PasswordRecoveryRepositoryInterface,
    userRepository: UserRepositoryInterface,
    idGeneratorAdapter: IdGeneratorAdapterInterface,
    mailerAdapter: MailerAdapterInterface,
  ) {
    this.passwordRecoveryRepository = passwordRecoveryRepository;
    this.userRepository = userRepository;
    this.idGeneratorAdapter = idGeneratorAdapter;
    this.mailerAdapter = mailerAdapter;
  }

  public async execute(email: string): Promise<string> {
    const foundUser = await this.userRepository.getOneByEmail(email);

    if (foundUser === null) {
      throw new InvalidParamError('Email');
    }

    const validationToken = this.idGeneratorAdapter.generateId();

    const passwordRecoveryData = await this.passwordRecoveryRepository
      .deleteByUser(foundUser.id)
      .then(
        async () =>
          await this.passwordRecoveryRepository.create(
            foundUser.id,
            validationToken,
          ),
      );

    if (passwordRecoveryData === null) {
      throw new InvalidParamError('Email');
    }

    const mailer = this.mailerAdapter;
    mailer.setApiEmailAccountInfo({
      service: process.env.API_EMAIL_SERVICE,
      account: {
        email: process.env.API_EMAIL_USER,
        password: process.env.API_EMAIL_PASSWORD,
      },
    });

    return await mailer.sendPasswordRecoveryEmail(
      foundUser.email,
      validationToken,
    );
  }
}
