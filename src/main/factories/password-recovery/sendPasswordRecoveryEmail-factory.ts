import { SendPasswordRecoveryEmailUseCase } from 'src/data/usecases/passwordRecovery/sendPasswordRecoveryEmail-usecase';
import { PasswordRecoveryRepository } from 'src/infra/repositories/passwordRecoveryToken-repository';
import { UserRepository } from 'src/infra/repositories/user-repository';
import { SendPasswordRecoveryEmailControllerInterface } from 'src/presentation/abstract/controllers/passwordRecovery/sendPasswordRecoveryEmailController-interface';
import { SendPasswordRecoveryEmailController } from 'src/presentation/controllers/passwordRecovery/sendPasswordRecoveryEmail-controller';
import { IdGeneratorAdapter } from 'src/utils/adapters/idGenerator-adapter';
import { MailerAdapter } from 'src/utils/adapters/mailer-adaper';

export function makeSendPasswordRecoveryEmail(): SendPasswordRecoveryEmailControllerInterface {
  const passwordRecoveryRepository = new PasswordRecoveryRepository();
  const userRepository = new UserRepository();
  const idGeneratorAdapter = new IdGeneratorAdapter();
  const mailerAdapter = new MailerAdapter();
  const sendPasswordRecoveryEmail = new SendPasswordRecoveryEmailUseCase(
    passwordRecoveryRepository,
    userRepository,
    idGeneratorAdapter,
    mailerAdapter,
  );

  return new SendPasswordRecoveryEmailController(sendPasswordRecoveryEmail);
}
