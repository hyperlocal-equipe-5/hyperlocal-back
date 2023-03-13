import { Controller, Query, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { GetAllCategoriesController } from 'src/presentation/controllers/category/getAllCategories-controller';
import { GetOneCategoryController } from 'src/presentation/controllers/category/getOneCategory-controller';

@ApiTags('/category')
@Controller('/category')
export class CategoryController {
  constructor(
    private readonly getAllCategoriesController: GetAllCategoriesController,
    private readonly getOneCategoryController: GetOneCategoryController,
  ) {}

  @ApiOperation({
    summary: ''
  })
  @Get('/get-one-category')
  async getOne(@Query() query) {
    const { id, restaurant } = query;
    const httpRequest: HttpRequest = { id, restaurant };
    return await this.getOneCategoryController.execute(httpRequest);
  }

  @ApiOperation({
    summary: ''
  })
  @Get('/get-all-categories')
  async getAll(@Query() query) {
    const { restaurant } = query;
    const httpRequest: HttpRequest = { restaurant };
    return await this.getAllCategoriesController.execute(httpRequest);
  }
}
