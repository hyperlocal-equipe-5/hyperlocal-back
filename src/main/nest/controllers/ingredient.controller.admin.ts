import { Controller, Post, Body, Delete, Query, Patch } from '@nestjs/common';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { CreateIngredientController } from 'src/presentation/controllers/ingredient/createIngredient-controller';
import { DeleteIngredientController } from 'src/presentation/controllers/ingredient/deleteIngredient-controller';
import { UpdateIngredientController } from 'src/presentation/controllers/ingredient/updateIngredient-controller';

@Controller('/admin/ingredient')
export class IngredientControllerAdmin {
  constructor(
    private readonly createIngredientController: CreateIngredientController,
    private readonly deleteIngredientController: DeleteIngredientController,
    private readonly UpdateIngredientController: UpdateIngredientController,
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
}
