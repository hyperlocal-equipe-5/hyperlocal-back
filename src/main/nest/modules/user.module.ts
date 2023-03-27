import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoginMiddleware } from '../middlewares/login.middleware';
import { makeCreateUserFactory } from 'src/main/factories/user/createUser-factory';
import { makeDeleteUserFactory } from 'src/main/factories/user/deleteUser-factory';
import { makeGetAllUserFactory } from 'src/main/factories/user/getAllUsers-factory';
import { makeGetOneUserFactory } from 'src/main/factories/user/getOneUser-factory';
import { makeUpdateUserFactory } from 'src/main/factories/user/updateUser-factory';
import { CreateUserController } from 'src/presentation/controllers/user/createUser-controller';
import { DeleteUserController } from 'src/presentation/controllers/user/deleteUser-controller';
import { GetAllUsersController } from 'src/presentation/controllers/user/getAllUsers-controller';
import { GetOneUserController } from 'src/presentation/controllers/user/getOneUser-controller';
import { UpdateUserController } from 'src/presentation/controllers/user/updateUser-controller';
import { UserController } from '../controllers/user/user.controller';
import { UserControllerAdmin } from '../controllers/user/user.controller.admin';

@Module({
  controllers: [UserController, UserControllerAdmin],
  providers: [
    {
      provide: CreateUserController,
      useFactory: makeCreateUserFactory,
    },
    {
      provide: DeleteUserController,
      useFactory: makeDeleteUserFactory,
    },
    {
      provide: UpdateUserController,
      useFactory: makeUpdateUserFactory,
    },
    {
      provide: GetAllUsersController,
      useFactory: makeGetAllUserFactory,
    },
    {
      provide: GetOneUserController,
      useFactory: makeGetOneUserFactory,
    },
  ],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoginMiddleware).forRoutes('/admin');
  }
}
