import { Controller, Post, Body, Delete, Query, Patch, Param } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { CreateCategoryController } from 'src/presentation/controllers/category/createCategory-controller';
import { DeleteCategoryController } from 'src/presentation/controllers/category/deleteCategory-controller';
import { UpdateCategoryController } from 'src/presentation/controllers/category/updateCategory-controller';
import { CreateCategory } from '../dtos/category/createCategory-dto';
import { GetOneCategory } from '../dtos/category/getOneCategory-dto';
import { UpdateCategory } from '../dtos/category/updateCategory-dto';
import { GetOneRestaurant } from '../dtos/getOneRestaurant-dto';

@ApiTags('/admin/category')
@Controller('/admin/category')
export class CategoryControllerAdmin {
  constructor(
    private readonly createCategoryController: CreateCategoryController,
    private readonly deleteCategoryController: DeleteCategoryController,
    private readonly UpdateCategoryController: UpdateCategoryController,
  ) {}


  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Route that an authorized account can create a new category from a restaurant.'
  })
  @Post()
  async create(@Body() body: CreateCategory) {
    const httpRequest: HttpRequest = { body };
    return await this.createCategoryController.execute(httpRequest);
  }

  @ApiOperation({
    summary: 'Route that an authorized account can delete a category from a restaurant.'
  })
  @ApiBearerAuth()
  @Delete(':id')
  async delete(@Param('id') id: string, @Query() query: GetOneRestaurant) {
    const { restaurant } = query;
    const httpRequest: HttpRequest = { id, restaurant };
    return await this.deleteCategoryController.execute(httpRequest);
  }

  @ApiOperation({
    summary: 'Route that an authorized account can upgrade a category from a restaurant.'
  })
  @ApiBearerAuth()
  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: UpdateCategory) {
    const httpRequest: HttpRequest = { body: {...body, id} };
    return await this.UpdateCategoryController.execute(httpRequest);
  }
}
