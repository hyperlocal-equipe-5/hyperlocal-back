import { Controller, Query, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { GetAllProductsController } from 'src/presentation/controllers/product/getAllProducts-controller';
import { GetOneProductController } from 'src/presentation/controllers/product/getOneProduct-controller';
import { GetAllProducts } from '../dtos/product/getAllProducts-dto';
import { GetOneProduct } from '../dtos/product/getOneProduct-dto';

@ApiTags('/product')
@Controller('/product')
export class ProductController {
  constructor(
    private readonly getAllProductsController: GetAllProductsController,
    private readonly getOneProductController: GetOneProductController,
  ) {}

  @ApiOperation({
    summary: ''
  })
  @Get('/get-one-product')
  async getOne(@Query() query: GetOneProduct) {
    const { id, restaurant } = query;
    const httpRequest: HttpRequest = { id, restaurant };
    return await this.getOneProductController.execute(httpRequest);
  }

  @ApiOperation({
    summary: ''
  })
  @Get('/get-all-products')
  async getAll(@Query() query: GetAllProducts) {
    const { restaurant } = query;
    const httpRequest: HttpRequest = { restaurant };
    return await this.getAllProductsController.execute(httpRequest);
  }
}
