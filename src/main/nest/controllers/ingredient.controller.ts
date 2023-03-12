import { Controller, Query, Get } from '@nestjs/common';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { GetAllIngredientsController } from 'src/presentation/controllers/ingredient/getAllIngredients-controller';
import { GetOneIngredientController } from 'src/presentation/controllers/ingredient/getOneIngredient-controller';

@Controller('/ingredient')
export class IngredientController {
  constructor(
    private readonly getAllIngredientsController: GetAllIngredientsController,
    private readonly getOneIngredientController: GetOneIngredientController,
  ) {}

  @Get('/get-one-ingredient')
  async getOne(@Query() query) {
    const { id, restaurant } = query;
    const httpRequest: HttpRequest = { id, restaurant };
    return await this.getOneIngredientController.execute(httpRequest);
  }

  @Get('/get-all-ingredients')
  async getAll(@Query() query) {
    const { restaurant } = query;
    const httpRequest: HttpRequest = { restaurant };
    return await this.getAllIngredientsController.execute(httpRequest);
  }
}
