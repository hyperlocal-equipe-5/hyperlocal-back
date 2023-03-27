import { Module } from '@nestjs/common';
import { makeRecoverPasswordController } from 'src/main/factories/password-recovery/recoverPassword-factory';
import { makeSendPasswordRecoveryEmail } from 'src/main/factories/password-recovery/sendPasswordRecoveryEmail-factory';
import { RecoverPasswordController } from 'src/presentation/controllers/passwordRecovery/recoverPassword-controller';
import { SendPasswordRecoveryEmailController } from 'src/presentation/controllers/passwordRecovery/sendPasswordRecoveryEmail-controller';
import { PasswordRecoveryController } from '../controllers/passwordRecovery/passwordRecovery.controller';

@Module({
  controllers: [PasswordRecoveryController],
  providers: [
    {
      provide: RecoverPasswordController,
      useFactory: makeRecoverPasswordController,
    },
    {
      provide: SendPasswordRecoveryEmailController,
      useFactory: makeSendPasswordRecoveryEmail,
    },
  ],
})
export class PasswordRecoveryModule {}
