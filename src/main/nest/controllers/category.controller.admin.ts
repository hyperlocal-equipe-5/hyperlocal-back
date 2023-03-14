import { Controller, Post, Body, Delete, Query, Patch } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { CreateCategoryController } from 'src/presentation/controllers/category/createCategory-controller';
import { DeleteCategoryController } from 'src/presentation/controllers/category/deleteCategory-controller';
import { UpdateCategoryController } from 'src/presentation/controllers/category/updateCategory-controller';
import { CreateCategory } from '../dtos/category/createCategory-dto';
import { GetOneCategory } from '../dtos/category/getOneCategory-dto';
import { UpdateCategory } from '../dtos/category/updateCategory-dto';

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
    summary: ''
  })
  @Post('/create-category')
  async create(@Body() body: CreateCategory) {
    const httpRequest: HttpRequest = { body };
    return await this.createCategoryController.execute(httpRequest);
  }

  @ApiOperation({
    summary: ''
  })
  @ApiBearerAuth()
  @Delete('/delete-category')
  async delete(@Query() query: GetOneCategory) {
    const { id, restaurant } = query;
    const httpRequest: HttpRequest = { id, restaurant };
    return await this.deleteCategoryController.execute(httpRequest);
  }

  @ApiOperation({
    summary: ''
  })
  @ApiBearerAuth()
  @Patch('/update-category')
  async update(@Body() body: UpdateCategory) {
    const httpRequest: HttpRequest = { body };
    return await this.UpdateCategoryController.execute(httpRequest);
  }
}
