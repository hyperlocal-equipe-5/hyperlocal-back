import { Controller, Query, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { GetAllIngredientsController } from 'src/presentation/controllers/ingredient/getAllIngredients-controller';
import { GetOneIngredientController } from 'src/presentation/controllers/ingredient/getOneIngredient-controller';
import { GetAllCategories } from '../dtos/category/getAllCategories-dto';
import { GetOneIngredient } from '../dtos/ingredient/getOneIngredient-dto';

@ApiTags('/ingredient')
@Controller('/ingredient')
export class IngredientController {
  constructor(
    private readonly getAllIngredientsController: GetAllIngredientsController,
    private readonly getOneIngredientController: GetOneIngredientController,
  ) {}

  @ApiOperation({
    summary: ''
  })
  @Get('/get-one-ingredient')
  async getOne(@Query() query: GetOneIngredient) {
    const { id, restaurant } = query;
    const httpRequest: HttpRequest = { id, restaurant };
    return await this.getOneIngredientController.execute(httpRequest);
  }

  @ApiOperation({
    summary: ''
  })
  @Get('/get-all-ingredients')
  async getAll(@Query() query: GetAllCategories) {
    const { restaurant } = query;
    const httpRequest: HttpRequest = { restaurant };
    return await this.getAllIngredientsController.execute(httpRequest);
  }
}
