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
import { CreateProductController } from 'src/presentation/controllers/product/createProduct-controller';
import { DeleteProductController } from 'src/presentation/controllers/product/deleteProduct-controller';
import { GetAllProductsController } from 'src/presentation/controllers/product/getAllProducts-controller';
import { GetOneProductController } from 'src/presentation/controllers/product/getOneProduct-controller';
import { UpdateProductController } from 'src/presentation/controllers/product/updateProduct-controller';

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
    summary: ''
  })
  @Post('/create-product')
  async create(@Body() body) {
    const httpRequest: HttpRequest = { body };
    return await this.createProductController.execute(httpRequest);
  }

  @ApiOperation({
    summary: ''
  })
  @Delete('/delete-product')
  async delete(@Query() query) {
    const { id, restaurant } = query;
    const httpRequest: HttpRequest = { id, restaurant };
    return await this.deleteProductController.execute(httpRequest);
  }

  @ApiOperation({
    summary: ''
  })
  @Patch('/update-product')
  async update(@Body() body) {
    const httpRequest: HttpRequest = { body };
    return await this.UpdateProductController.execute(httpRequest);
  }
}
