import {
  Controller,
  Post,
  Body,
  Delete,
  Query,
  Patch,
  Param,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { CreateProductController } from 'src/presentation/controllers/product/createProduct-controller';
import { DeleteProductController } from 'src/presentation/controllers/product/deleteProduct-controller';
import { UpdateProductController } from 'src/presentation/controllers/product/updateProduct-controller';
import { GetOneRestaurant } from '../../dtos/getOneRestaurant-dto';
import { CreateProduct } from '../../dtos/product/createProduct-dto';
import { UpdateProduct } from '../../dtos/product/updateProduct-dto';

@ApiTags('/admin/product')
@Controller('/admin/product')
export class ProductControllerAdmin {
  constructor(
    private readonly createProductController: CreateProductController,
    private readonly deleteProductController: DeleteProductController,
    private readonly UpdateProductController: UpdateProductController,
  ) {}

  @ApiOperation({
    summary:
      'Route that an authorized account can create a new product for a restaurant.',
  })
  @ApiBearerAuth()
  @Post()
  async create(@Body() body: CreateProduct) {
    const httpRequest: HttpRequest = { body };
    return await this.createProductController.execute(httpRequest);
  }

  @ApiOperation({
    summary:
      'Route that an authorized account can delete a product from a restaurant.',
  })
  @ApiBearerAuth()
  @Delete(':id')
  async delete(
    @Param('id') id: string,
    @Query() query: GetOneRestaurant,
    @Body() body: any,
  ) {
    const { restaurant } = query;
    const httpRequest: HttpRequest = { id, restaurant, body };
    return await this.deleteProductController.execute(httpRequest);
  }

  @ApiOperation({
    summary:
      'Route that an authorized account can update a product from a restaurant.',
  })
  @ApiBearerAuth()
  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: UpdateProduct) {
    const httpRequest: HttpRequest = { body: { ...body, id } };
    return await this.UpdateProductController.execute(httpRequest);
  }
}
