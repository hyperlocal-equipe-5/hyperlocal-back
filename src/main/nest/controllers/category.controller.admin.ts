import {
  Controller,
  Post,
  Body,
  Delete,
  Query,
  Patch,
  Get,
} from '@nestjs/common';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { CreateCategoryController } from 'src/presentation/controllers/category/createCategory-controller';
import { DeleteCategoryController } from 'src/presentation/controllers/category/deleteCategory-controller';
import { GetAllCategoriesController } from 'src/presentation/controllers/category/getAllCategories-controller';
import { GetOneCategoryController } from 'src/presentation/controllers/category/getOneCategory-controller';
import { UpdateCategoryController } from 'src/presentation/controllers/category/updateCategory-controller';

@Controller('/admin/category')
export class CategoryControllerAdmin {
  constructor(
    private readonly createCategoryController: CreateCategoryController,
    private readonly deleteCategoryController: DeleteCategoryController,
    private readonly UpdateCategoryController: UpdateCategoryController,
    private readonly getAllCategoriesController: GetAllCategoriesController,
    private readonly getOneCategoryController: GetOneCategoryController,
  ) {}

  @Post('/create-category')
  async create(@Body() body) {
    const httpRequest: HttpRequest = { body };
    return await this.createCategoryController.execute(httpRequest);
  }

  @Delete('/delete-category')
  async delete(@Query() query) {
    const { id, restaurant } = query;
    const httpRequest: HttpRequest = { id, restaurant };
    return await this.deleteCategoryController.execute(httpRequest);
  }

  @Patch('/update-category')
  async update(@Body() body) {
    const httpRequest: HttpRequest = { body };
    return await this.UpdateCategoryController.execute(httpRequest);
  }

  @Get('/get-one-category')
  async getOneAdmin(@Query() query) {
    const { id, restaurant } = query;
    const httpRequest: HttpRequest = { id, restaurant };
    return await this.getOneCategoryController.execute(httpRequest);
  }

  @Get('/get-all-categories')
  async getAllAdmin(@Query() query) {
    const { restaurant } = query;
    const httpRequest: HttpRequest = { restaurant };
    return await this.getAllCategoriesController.execute(httpRequest);
  }
}
