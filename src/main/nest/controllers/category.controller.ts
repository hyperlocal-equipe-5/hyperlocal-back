import { Controller, Query, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { GetAllCategoriesController } from 'src/presentation/controllers/category/getAllCategories-controller';
import { GetOneCategoryController } from 'src/presentation/controllers/category/getOneCategory-controller';
import { GetAllCategories } from '../dtos/category/getAllCategories-dto';
import { GetOneCategory } from '../dtos/category/getOneCategory-dto';
import { GetOneRestaurant } from '../dtos/getOneRestaurant-dto';

@ApiTags('/category')
@Controller('/category')
export class CategoryController {
  constructor(
    private readonly getAllCategoriesController: GetAllCategoriesController,
    private readonly getOneCategoryController: GetOneCategoryController,
  ) {}

  @ApiOperation({
    summary: 'Route to get one category from a restaurant.'
  })
  @Get(':id')
  async getOne(@Param('id') id: string, @Query() query: GetOneRestaurant) {
    const { restaurant } = query;
    const httpRequest: HttpRequest = { id, restaurant };
    return await this.getOneCategoryController.execute(httpRequest);
  }

  @ApiOperation({
    summary: 'route to get all categories from a restaurant.'
  })
  @Get()
  async getAll(@Query() query: GetAllCategories) {
    const { restaurant } = query;
    const httpRequest: HttpRequest = { restaurant };
    return await this.getAllCategoriesController.execute(httpRequest);
  }
}
