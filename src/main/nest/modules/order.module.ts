import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoginMiddleware } from '../middlewares/login.middleware';
import { makeCreateOrderFactory } from 'src/main/factories/order/createOrder-factory';
import { makeDeleteOrderFactory } from 'src/main/factories/order/deleteOrder-factory';
import { makeGetAllOrderFactory } from 'src/main/factories/order/getAllOrders-factory';
import { makeGetOneOrderFactory } from 'src/main/factories/order/getOneOrder-factory';
import { makeUpdateOrderFactory } from 'src/main/factories/order/updateOrder-factory';
import { CreateOrderController } from 'src/presentation/controllers/order/createOrder-controller';
import { DeleteOrderController } from 'src/presentation/controllers/order/deleteOrder-controller';
import { GetAllOrdersController } from 'src/presentation/controllers/order/getAllOrders-controller';
import { GetOneOrderController } from 'src/presentation/controllers/order/getOneOrder-controller';
import { UpdateOrderController } from 'src/presentation/controllers/order/updateOrder-controller';
import { OrderController } from '../controllers/order.controller';
import { OrderControllerAdmin } from '../controllers/order.controller.admin';

@Module({
  controllers: [OrderController, OrderControllerAdmin],
  providers: [
    {
      provide: CreateOrderController,
      useFactory: makeCreateOrderFactory,
    },
    {
      provide: DeleteOrderController,
      useFactory: makeDeleteOrderFactory,
    },
    {
      provide: UpdateOrderController,
      useFactory: makeUpdateOrderFactory,
    },
    {
      provide: GetAllOrdersController,
      useFactory: makeGetAllOrderFactory,
    },
    {
      provide: GetOneOrderController,
      useFactory: makeGetOneOrderFactory,
    },
  ],
})
export class OrderModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoginMiddleware).forRoutes('/admin');
  }
}
