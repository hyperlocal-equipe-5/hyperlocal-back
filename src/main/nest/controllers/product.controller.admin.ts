import {
  Controller,
  Post,
  Body,
  Delete,
  Query,
  Patch,
  Get,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { CreateProductController } from 'src/presentation/controllers/product/createProduct-controller';
import { DeleteProductController } from 'src/presentation/controllers/product/deleteProduct-controller';
import { GetAllProductsController } from 'src/presentation/controllers/product/getAllProducts-controller';
import { GetOneProductController } from 'src/presentation/controllers/product/getOneProduct-controller';
import { UpdateProductController } from 'src/presentation/controllers/product/updateProduct-controller';
import { CreateProduct } from '../dtos/product/createProduct-dto';
import { GetOneProduct } from '../dtos/product/getOneProduct-dto';
import { UpdateProduct } from '../dtos/product/updateProduct-dto';

@ApiTags('/admin/product')
@Controller('/admin/product')
export class ProductControllerAdmin {
  constructor(
    private readonly createProductController: CreateProductController,
    private readonly deleteProductController: DeleteProductController,
    private readonly UpdateProductController: UpdateProductController,
    private readonly getAllProductsController: GetAllProductsController,
    private readonly getOneProductController: GetOneProductController,
  ) {}

  @ApiOperation({
    summary: 'Route that an authorized account can create a new product for a restaurant.'
  })
  @ApiBearerAuth()
  @Post('/create-product')
  async create(@Body() body: CreateProduct) {
    const httpRequest: HttpRequest = { body };
    return await this.createProductController.execute(httpRequest);
  }

  @ApiOperation({
    summary: 'Route that an authorized account can delete a product from a restaurant.'
  })
  @ApiBearerAuth()
  @Delete('/delete-product')
  async delete(@Query() query: GetOneProduct) {
    const { id, restaurant } = query;
    const httpRequest: HttpRequest = { id, restaurant };
    return await this.deleteProductController.execute(httpRequest);
  }

  @ApiOperation({
    summary: 'Route that an authorized account can update a product from a restaurant.'
  })
  @ApiBearerAuth()
  @Patch('/update-product')
  async update(@Body() body: UpdateProduct) {
    const httpRequest: HttpRequest = { body };
    return await this.UpdateProductController.execute(httpRequest);
  }
}
