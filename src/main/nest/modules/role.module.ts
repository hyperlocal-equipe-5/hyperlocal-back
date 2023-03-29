import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoginMiddleware } from '../middlewares/login.middleware';
import { makeCreateRoleFactory } from 'src/main/factories/role/createRole-factory';
import { makeDeleteRoleFactory } from 'src/main/factories/role/deleteRole-factory';
import { makeGetAllRoleFactory } from 'src/main/factories/role/getAllRoles-factory';
import { makeGetOneRoleFactory } from 'src/main/factories/role/getOneRole-factory';
import { makeUpdateRoleFactory } from 'src/main/factories/role/updateRole-factory';
import { CreateRoleController } from 'src/presentation/controllers/role/createRole-controller';
import { DeleteRoleController } from 'src/presentation/controllers/role/deleteRole-controller';
import { GetAllRolesController } from 'src/presentation/controllers/role/getAllRoles-controller';
import { GetOneRoleController } from 'src/presentation/controllers/role/getOneRole-controller';
import { UpdateRoleController } from 'src/presentation/controllers/role/updateRole-controller';
import { RoleControllerAdmin } from '../controllers/role/role.controller.admin';

@Module({
  controllers: [RoleControllerAdmin],
  providers: [
    {
      provide: CreateRoleController,
      useFactory: makeCreateRoleFactory,
    },
    {
      provide: DeleteRoleController,
      useFactory: makeDeleteRoleFactory,
    },
    {
      provide: UpdateRoleController,
      useFactory: makeUpdateRoleFactory,
    },
    {
      provide: GetAllRolesController,
      useFactory: makeGetAllRoleFactory,
    },
    {
      provide: GetOneRoleController,
      useFactory: makeGetOneRoleFactory,
    },
  ],
})
export class RoleModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoginMiddleware).forRoutes('/admin');
  }
}
