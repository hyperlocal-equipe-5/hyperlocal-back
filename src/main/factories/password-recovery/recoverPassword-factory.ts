import { RecoverPasswordUseCase } from 'src/data/usecases/passwordRecovery/recoverPassword-usecase';
import { UserEntity } from 'src/entities/user-entity';
import { PasswordRecoveryRepository } from 'src/infra/repositories/passwordRecoveryToken-repository';
import { UserRepository } from 'src/infra/repositories/user-repository';
import { RecoverPasswordControllerInterface } from 'src/presentation/abstract/controllers/passwordRecovery/recoverPasswordController-interface';
import { RecoverPasswordController } from 'src/presentation/controllers/passwordRecovery/recoverPassword-controller';
import { HasherAdapter } from 'src/utils/adapters/hasher-adapter';
import { IdGeneratorAdapter } from 'src/utils/adapters/idGenerator-adapter';

export function makeRecoverPasswordController(): RecoverPasswordControllerInterface {
  const passwordRecoveryRepository = new PasswordRecoveryRepository();
  const userRepository = new UserRepository();
  const idGeneratorAdapter = new IdGeneratorAdapter();
  const hasherAdapter = new HasherAdapter();
  const userEntity = new UserEntity(idGeneratorAdapter, hasherAdapter);
  const recoverPasswordUseCase = new RecoverPasswordUseCase(
    passwordRecoveryRepository,
    userRepository,
    userEntity,
  );

  return new RecoverPasswordController(recoverPasswordUseCase);
}
