import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoginMiddleware } from '../middlewares/login.middleware';
import { makeCreateTableFactory } from 'src/main/factories/table/createTable-factory';
import { makeDeleteTableFactory } from 'src/main/factories/table/deleteTable-factory';
import { makeGetAllTableFactory } from 'src/main/factories/table/getAllTables-factory';
import { makeGetOneTableFactory } from 'src/main/factories/table/getOneTable-factory';
import { makeUpdateTableFactory } from 'src/main/factories/table/updateTable-factory';
import { CreateTableController } from 'src/presentation/controllers/table/createTable-controller';
import { DeleteTableController } from 'src/presentation/controllers/table/deleteTable-controller';
import { GetAllTablesController } from 'src/presentation/controllers/table/getAllTables-controller';
import { GetOneTableController } from 'src/presentation/controllers/table/getOneTable-controller';
import { UpdateTableController } from 'src/presentation/controllers/table/updateTable-controller';
import { TableControllerAdmin } from '../controllers/table.controller.admin';
import { TableController } from '../controllers/table.controller';

@Module({
  controllers: [TableControllerAdmin, TableController],
  providers: [
    {
      provide: CreateTableController,
      useFactory: makeCreateTableFactory,
    },
    {
      provide: DeleteTableController,
      useFactory: makeDeleteTableFactory,
    },
    {
      provide: UpdateTableController,
      useFactory: makeUpdateTableFactory,
    },
    {
      provide: GetAllTablesController,
      useFactory: makeGetAllTableFactory,
    },
    {
      provide: GetOneTableController,
      useFactory: makeGetOneTableFactory,
    },
  ],
})
export class TableModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoginMiddleware).forRoutes('/admin');
  }
}
