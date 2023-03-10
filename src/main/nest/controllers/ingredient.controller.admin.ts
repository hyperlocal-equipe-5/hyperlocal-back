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
import { CreateIngredientController } from 'src/presentation/controllers/ingredient/createIngredient-controller';
import { DeleteIngredientController } from 'src/presentation/controllers/ingredient/deleteIngredient-controller';
import { GetAllIngredientsController } from 'src/presentation/controllers/ingredient/getAllIngredients-controller';
import { GetOneIngredientController } from 'src/presentation/controllers/ingredient/getOneIngredient-controller';
import { UpdateIngredientController } from 'src/presentation/controllers/ingredient/updateIngredient-controller';

@Controller('/admin/ingredient')
export class IngredientControllerAdmin {
  constructor(
    private readonly createIngredientController: CreateIngredientController,
    private readonly deleteIngredientController: DeleteIngredientController,
    private readonly UpdateIngredientController: UpdateIngredientController,
    private readonly getAllIngredientsController: GetAllIngredientsController,
    private readonly getOneIngredientController: GetOneIngredientController,
  ) {}

  @Post('/create-ingredient')
  async create(@Body() body) {
    const httpRequest: HttpRequest = { body };
    return await this.createIngredientController.execute(httpRequest);
  }

  @Delete('/delete-ingredient')
  async delete(@Query() query) {
    const { id, restaurant } = query;
    const httpRequest: HttpRequest = { id, restaurant };
    return await this.deleteIngredientController.execute(httpRequest);
  }

  @Patch('/update-ingredient')
  async update(@Body() body) {
    const httpRequest: HttpRequest = { body };
    return await this.UpdateIngredientController.execute(httpRequest);
  }

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
