import {
  Controller,
  Post,
  Body,
  Delete,
  Query,
  Patch,
  Param,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { CreateRestaurantController } from 'src/presentation/controllers/restaurant/createRestaurant-controller';
import { DeleteRestaurantController } from 'src/presentation/controllers/restaurant/deleteRestaurant-controller';
import { UpdateRestaurantController } from 'src/presentation/controllers/restaurant/updateRestaurant-controller';
import { CreateRestaurant } from '../../dtos/restaurant/createRestaurant-dto';
import { UpdateRestaurant } from '../../dtos/restaurant/updateRestaurant-dto';

@ApiTags('/admin/restaurant')
@Controller('/admin/restaurant')
export class RestaurantControllerAdmin {
  constructor(
    private readonly createRestaurantController: CreateRestaurantController,
    private readonly deleteRestaurantController: DeleteRestaurantController,
    private readonly UpdateRestaurantController: UpdateRestaurantController,
  ) {}

  @ApiOperation({
    summary: 'Route that an authorized account can create a new restaurant.',
  })
  @ApiBearerAuth()
  @Post()
  async create(@Body() body: CreateRestaurant) {
    const httpRequest: HttpRequest = { body };
    return await this.createRestaurantController.execute(httpRequest);
  }

  @ApiOperation({
    summary: 'Route that an authorized account can delete a restaurant.',
  })
  @ApiBearerAuth()
  @Delete(':id')
  async delete(@Param('id') id: string) {
    const httpRequest: HttpRequest = { id };
    return await this.deleteRestaurantController.execute(httpRequest);
  }

  @ApiOperation({
    summary: 'Route that an authorized account can update a restaurant.',
  })
  @ApiBearerAuth()
  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: UpdateRestaurant) {
    const httpRequest: HttpRequest = { body: { ...body, id } };
    return await this.UpdateRestaurantController.execute(httpRequest);
  }
}
