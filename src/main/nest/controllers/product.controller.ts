import { Controller, Query, Get } from '@nestjs/common';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { GetAllProductsController } from 'src/presentation/controllers/product/getAllProducts-controller';
import { GetOneProductController } from 'src/presentation/controllers/product/getOneProduct-controller';

@Controller('/product')
export class ProductController {
  constructor(
    private readonly getAllProductsController: GetAllProductsController,
    private readonly getOneProductController: GetOneProductController,
  ) {}

  @Get('/get-one')
  async getOne(@Query() query) {
    const { id, restaurant } = query;
    const httpRequest: HttpRequest = { id, restaurant };
    return await this.getOneProductController.execute(httpRequest);
  }

  @Get('/get-all')
  async getAll(@Query() query) {
    const { restaurant } = query;
    const httpRequest: HttpRequest = { restaurant };
    return await this.getAllProductsController.execute(httpRequest);
  }
}
