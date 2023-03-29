import { Controller, Query, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { GetAllIngredientsController } from 'src/presentation/controllers/ingredient/getAllIngredients-controller';
import { GetOneIngredientController } from 'src/presentation/controllers/ingredient/getOneIngredient-controller';
import { GetAllCategories } from '../../dtos/category/getAllCategories-dto';
import { GetOneRestaurant } from '../../dtos/getOneRestaurant-dto';

@ApiTags('/ingredient')
@Controller('/ingredient')
export class IngredientController {
  constructor(
    private readonly getAllIngredientsController: GetAllIngredientsController,
    private readonly getOneIngredientController: GetOneIngredientController,
  ) {}

  @ApiOperation({
    summary: 'Route to get one ingredent from a restaurant.',
  })
  @Get(':id')
  async getOne(@Param('id') id: string, @Query() query: GetOneRestaurant) {
    const { restaurant } = query;
    const httpRequest: HttpRequest = { id, restaurant };
    return await this.getOneIngredientController.execute(httpRequest);
  }

  @ApiOperation({
    summary: 'Route to get all ingrendients from a restaurant.',
  })
  @Get()
  async getAll(@Query() query: GetAllCategories) {
    const { restaurant } = query;
    const httpRequest: HttpRequest = { restaurant };
    return await this.getAllIngredientsController.execute(httpRequest);
  }
}
