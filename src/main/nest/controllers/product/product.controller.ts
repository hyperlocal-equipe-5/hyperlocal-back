import { Controller, Query, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { GetAllProductsController } from 'src/presentation/controllers/product/getAllProducts-controller';
import { GetOneProductController } from 'src/presentation/controllers/product/getOneProduct-controller';
import { GetOneRestaurant } from '../../dtos/getOneRestaurant-dto';
import { GetAllProducts } from '../../dtos/product/getAllProducts-dto';

@ApiTags('/product')
@Controller('/product')
export class ProductController {
  constructor(
    private readonly getAllProductsController: GetAllProductsController,
    private readonly getOneProductController: GetOneProductController,
  ) {}

  @ApiOperation({
    summary: 'Route to get one product from a restaurant.',
  })
  @Get(':id')
  async getOne(@Param('id') id: string, @Query() query: GetOneRestaurant) {
    const { restaurant } = query;
    const httpRequest: HttpRequest = { id, restaurant };
    return await this.getOneProductController.execute(httpRequest);
  }

  @ApiOperation({
    summary: 'Route to get all products from a restaurants.',
  })
  @Get()
  async getAll(@Query() query: GetAllProducts) {
    const { restaurant } = query;
    const httpRequest: HttpRequest = { restaurant };
    return await this.getAllProductsController.execute(httpRequest);
  }
}
