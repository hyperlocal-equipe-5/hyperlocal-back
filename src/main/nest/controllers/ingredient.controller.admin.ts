import { Controller, Post, Body, Delete, Query, Patch, Param } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { CreateIngredientController } from 'src/presentation/controllers/ingredient/createIngredient-controller';
import { DeleteIngredientController } from 'src/presentation/controllers/ingredient/deleteIngredient-controller';
import { UpdateIngredientController } from 'src/presentation/controllers/ingredient/updateIngredient-controller';
import { GetOneRestaurant } from '../dtos/getOneRestaurant-dto';
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
  @Post()
  async create(@Body() body: CreateIngredient) {
    const httpRequest: HttpRequest = { body };
    return await this.createIngredientController.execute(httpRequest);
  }

  @ApiOperation({
    summary: 'Route that an authorized account can delete an ingredient from a restaurant.'
  })
  @ApiBearerAuth()
  @Delete(':id')
  async delete(@Param('id') id:string, @Query() query: GetOneRestaurant) {
    const { restaurant } = query;
    const httpRequest: HttpRequest = { id, restaurant };
    return await this.deleteIngredientController.execute(httpRequest);
  }

  @ApiOperation({
    summary: 'Route that an authorized account can update an ingredient from a restaurant.'
  })
  @ApiBearerAuth()
  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: UpdateIngredient) {
    const httpRequest: HttpRequest = { body: { ...body, id } };
    return await this.UpdateIngredientController.execute(httpRequest);
  }
}
