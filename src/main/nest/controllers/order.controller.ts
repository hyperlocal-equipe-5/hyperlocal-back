import { Controller, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { CreateOrderController } from 'src/presentation/controllers/order/createOrder-controller';
import { CreateOrder } from '../dtos/order/createOrder-dto';

@ApiTags('/order')
@Controller()
export class OrderController {
  constructor(private readonly createOrderController: CreateOrderController) {}

  @ApiOperation({
    summary: ''
  })
  @Post('/orders/order')
  async create(@Body() body: CreateOrder) {
    const httpRequest: HttpRequest = { body };
    return await this.createOrderController.execute(httpRequest);
  }
}
