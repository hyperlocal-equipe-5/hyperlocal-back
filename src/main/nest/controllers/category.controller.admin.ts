import { Controller, Post, Body, Delete, Query, Patch } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { CreateCategoryController } from 'src/presentation/controllers/category/createCategory-controller';
import { DeleteCategoryController } from 'src/presentation/controllers/category/deleteCategory-controller';
import { UpdateCategoryController } from 'src/presentation/controllers/category/updateCategory-controller';

@ApiTags('/admin/category')
@Controller('/admin/category')
export class CategoryControllerAdmin {
  constructor(
    private readonly createCategoryController: CreateCategoryController,
    private readonly deleteCategoryController: DeleteCategoryController,
    private readonly UpdateCategoryController: UpdateCategoryController,
  ) {}


  @ApiOperation({
    summary: ''
  })
  @Post('/create-category')
  async create(@Body() body) {
    const httpRequest: HttpRequest = { body };
    return await this.createCategoryController.execute(httpRequest);
  }

  @ApiOperation({
    summary: ''
  })
  @Delete('/delete-category')
  async delete(@Query() query) {
    const { id, restaurant } = query;
    const httpRequest: HttpRequest = { id, restaurant };
    return await this.deleteCategoryController.execute(httpRequest);
  }

  @ApiOperation({
    summary: ''
  })
  @Patch('/update-category')
  async update(@Body() body) {
    const httpRequest: HttpRequest = { body };
    return await this.UpdateCategoryController.execute(httpRequest);
  }
}
