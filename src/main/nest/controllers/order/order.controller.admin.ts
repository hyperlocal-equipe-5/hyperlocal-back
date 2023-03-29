import {
  Controller,
  Post,
  Body,
  Delete,
  Query,
  Patch,
  Get,
  Param,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { CreateOrderController } from 'src/presentation/controllers/order/createOrder-controller';
import { DeleteOrderController } from 'src/presentation/controllers/order/deleteOrder-controller';
import { GetAllOrdersController } from 'src/presentation/controllers/order/getAllOrders-controller';
import { GetOneOrderController } from 'src/presentation/controllers/order/getOneOrder-controller';
import { UpdateOrderController } from 'src/presentation/controllers/order/updateOrder-controller';
import { GetOneRestaurant } from '../../dtos/getOneRestaurant-dto';
import { CreateOrder } from '../../dtos/order/createOrder-dto';
import { GetAllOrders } from '../../dtos/order/getAllOrders-dto';
import { UpdateOrder } from '../../dtos/order/updateOrder-dto';

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
    summary:
      'Route that an authorized account can create a new order for a restaurant.',
  })
  @ApiBearerAuth()
  @Post()
  async createAdmin(@Body() body: CreateOrder) {
    const httpRequest: HttpRequest = { body };
    return await this.createOrderController.execute(httpRequest);
  }

  @ApiOperation({
    summary:
      'Route that an authorized account can delete an order from a restaurant',
  })
  @ApiBearerAuth()
  @Delete(':id')
  async delete(@Param('id') id: string, @Query() query: GetOneRestaurant) {
    const { restaurant } = query;
    const httpRequest: HttpRequest = { id, restaurant };
    return await this.deleteOrderController.execute(httpRequest);
  }

  @ApiOperation({
    summary:
      'Route that an authorized account can update an order from a restaurant.',
  })
  @ApiBearerAuth()
  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: UpdateOrder) {
    const httpRequest: HttpRequest = { body: { ...body, id } };
    return await this.UpdateOrderController.execute(httpRequest);
  }

  @ApiOperation({
    summary:
      'Route that an authorized account can get one order from a restaurant.',
  })
  @ApiBearerAuth()
  @Get(':id')
  async getOne(
    @Param('id') id: string,
    @Query() query: GetOneRestaurant,
    @Body() body: any,
  ) {
    const { restaurant } = query;
    const httpRequest: HttpRequest = { id, restaurant, body };
    return await this.getOneOrderController.execute(httpRequest);
  }

  @ApiOperation({
    summary:
      'Route that an authorized account can get all orders from a restaurant.',
  })
  @ApiBearerAuth()
  @Get()
  async getAll(@Query() query: GetAllOrders, @Body() body: any) {
    const { restaurant } = query;
    const httpRequest: HttpRequest = { restaurant, body };
    return await this.getAllOrdersController.execute(httpRequest);
  }
}
