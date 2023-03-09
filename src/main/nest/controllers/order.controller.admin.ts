import {
  Controller,
  Post,
  Body,
  Delete,
  Query,
  Patch,
  Get,
} from '@nestjs/common';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { CreateOrderController } from 'src/presentation/controllers/order/createOrder-controller';
import { DeleteOrderController } from 'src/presentation/controllers/order/deleteOrder-controller';
import { GetAllOrdersController } from 'src/presentation/controllers/order/getAllOrders-controller';
import { GetOneOrderController } from 'src/presentation/controllers/order/getOneOrder-controller';
import { UpdateOrderController } from 'src/presentation/controllers/order/updateOrder-controller';

@Controller('/admin/order')
export class OrderControllerAdmin {
  constructor(
    private readonly createOrderController: CreateOrderController,
    private readonly deleteOrderController: DeleteOrderController,
    private readonly UpdateOrderController: UpdateOrderController,
    private readonly getAllOrdersController: GetAllOrdersController,
    private readonly getOneOrderController: GetOneOrderController,
  ) {}

  @Post('/create-order')
  async createAdmin(@Body() body) {
    const httpRequest: HttpRequest = { body };
    return await this.createOrderController.execute(httpRequest);
  }

  @Delete('/delete-order')
  async delete(@Query() query) {
    const { id, restaurant } = query;
    const httpRequest: HttpRequest = { id, restaurant };
    return await this.deleteOrderController.execute(httpRequest);
  }

  @Patch('/update-order')
  async update(@Body() body) {
    const httpRequest: HttpRequest = { body };
    return await this.UpdateOrderController.execute(httpRequest);
  }

  @Get('/get-one-order')
  async getOne(@Query() query) {
    const { id, restaurant } = query;
    const httpRequest: HttpRequest = { id, restaurant };
    return await this.getOneOrderController.execute(httpRequest);
  }

  @Get('/get-all-orders')
  async getAll(@Query() query) {
    const { restaurant } = query;
    const httpRequest: HttpRequest = { restaurant };
    return await this.getAllOrdersController.execute(httpRequest);
  }
}
