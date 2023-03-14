import { Controller, Post, Body, Delete, Query, Patch } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { CreateIngredientController } from 'src/presentation/controllers/ingredient/createIngredient-controller';
import { DeleteIngredientController } from 'src/presentation/controllers/ingredient/deleteIngredient-controller';
import { UpdateIngredientController } from 'src/presentation/controllers/ingredient/updateIngredient-controller';
import { CreateIngredient } from '../dtos/ingredient/createIngredient-dto';
import { GetOneIngredient } from '../dtos/ingredient/getOneIngredient-dto';
import { UpdateIngredient } from '../dtos/ingredient/updateIngredient-dto';

@ApiTags('/admin/ingredient')
@Controller('/admin/ingredient')
export class IngredientControllerAdmin {
  constructor(
    private readonly createIngredientController: CreateIngredientController,
    private readonly deleteIngredientController: DeleteIngredientController,
    private readonly UpdateIngredientController: UpdateIngredientController,
  ) {}

  @ApiOperation({
    summary: 'Route that an authorized account can create a new ingredient from a restaurant.'
  })
  @ApiBearerAuth()
  @Post('/create-ingredient')
  async create(@Body() body: CreateIngredient) {
    const httpRequest: HttpRequest = { body };
    return await this.createIngredientController.execute(httpRequest);
  }

  @ApiOperation({
    summary: 'Route that an authorized account can delete an ingredient from a restaurant.'
  })
  @ApiBearerAuth()
  @Delete('/delete-ingredient')
  async delete(@Query() query: GetOneIngredient) {
    const { id, restaurant } = query;
    const httpRequest: HttpRequest = { id, restaurant };
    return await this.deleteIngredientController.execute(httpRequest);
  }

  @ApiOperation({
    summary: 'Route that an authorized account can update an ingredient from a restaurant.'
  })
  @ApiBearerAuth()
  @Patch('/update-ingredient')
  async update(@Body() body: UpdateIngredient) {
    const httpRequest: HttpRequest = { body };
    return await this.UpdateIngredientController.execute(httpRequest);
  }
}
