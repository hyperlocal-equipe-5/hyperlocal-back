import { Module } from '@nestjs/common';
import { MakeLoginFactory } from 'src/main/factories/login/makeLogin-factory';
import { MakeLoginController } from 'src/presentation/controllers/login/makeLogin-controller';
import { LoginController } from '../controllers/login/login.controller';
@Module({
  controllers: [LoginController],
  providers: [
    {
      provide: MakeLoginController,
      useFactory: MakeLoginFactory,
    },
  ],
})
export class LoginModule {}
