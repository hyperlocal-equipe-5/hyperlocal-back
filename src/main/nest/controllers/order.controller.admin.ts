import {
  Controller,
  Post,
  Body,
  Delete,
  Query,
  Patch,
  Get,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { CreateOrderController } from 'src/presentation/controllers/order/createOrder-controller';
import { DeleteOrderController } from 'src/presentation/controllers/order/deleteOrder-controller';
import { GetAllOrdersController } from 'src/presentation/controllers/order/getAllOrders-controller';
import { GetOneOrderController } from 'src/presentation/controllers/order/getOneOrder-controller';
import { UpdateOrderController } from 'src/presentation/controllers/order/updateOrder-controller';

@ApiTags('/admin/order')
@Controller('/admin/order')
export class OrderControllerAdmin {
  constructor(
    private readonly createOrderController: CreateOrderController,
    private readonly deleteOrderController: DeleteOrderController,
    private readonly UpdateOrderController: UpdateOrderController,
    private readonly getAllOrdersController: GetAllOrdersController,
    private readonly getOneOrderController: GetOneOrderController,
  ) {}

  @ApiOperation({
    summary: ''
  })
  @Post('/create-order')
  async createAdmin(@Body() body) {
    const httpRequest: HttpRequest = { body };
    return await this.createOrderController.execute(httpRequest);
  }

  @ApiOperation({
    summary: ''
  })
  @Delete('/delete-order')
  async delete(@Query() query) {
    const { id, restaurant } = query;
    const httpRequest: HttpRequest = { id, restaurant };
    return await this.deleteOrderController.execute(httpRequest);
  }

  @ApiOperation({
    summary: ''
  })
  @Patch('/update-order')
  async update(@Body() body) {
    const httpRequest: HttpRequest = { body };
    return await this.UpdateOrderController.execute(httpRequest);
  }

  @ApiOperation({
    summary: ''
  })
  @Get('/get-one-order')
  async getOne(@Query() query) {
    const { id, restaurant } = query;
    const httpRequest: HttpRequest = { id, restaurant };
    return await this.getOneOrderController.execute(httpRequest);
  }

  @ApiOperation({
    summary: ''
  })
  @Get('/get-all-orders')
  async getAll(@Query() query) {
    const { restaurant } = query;
    const httpRequest: HttpRequest = { restaurant };
    return await this.getAllOrdersController.execute(httpRequest);
  }
}
