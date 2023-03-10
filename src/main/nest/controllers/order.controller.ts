import { Controller, Post, Body } from '@nestjs/common';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { CreateOrderController } from 'src/presentation/controllers/order/createOrder-controller';

@Controller()
export class OrderController {
  constructor(private readonly createOrderController: CreateOrderController) {}

  @Post('/orders/order')
  async create(@Body() body) {
    const httpRequest: HttpRequest = { body };
    return await this.createOrderController.execute(httpRequest);
  }
}
