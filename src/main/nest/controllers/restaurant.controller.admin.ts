import { Controller, Post, Body, Delete, Query, Patch } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { CreateRestaurantController } from 'src/presentation/controllers/restaurant/createRestaurant-controller';
import { DeleteRestaurantController } from 'src/presentation/controllers/restaurant/deleteRestaurant-controller';
import { UpdateRestaurantController } from 'src/presentation/controllers/restaurant/updateRestaurant-controller';
import { CreateRestaurant } from '../dtos/restaurant/createRestaurant-dto';
import { GetOneRestaurant } from '../dtos/restaurant/getOneRestaurant-dto';
import { UpdateRestaurant } from '../dtos/restaurant/updateRestaurant-dto';

@ApiTags('/admin/restaurant')
@Controller('/admin/restaurant')
export class RestaurantControllerAdmin {
  constructor(
    private readonly createRestaurantController: CreateRestaurantController,
    private readonly deleteRestaurantController: DeleteRestaurantController,
    private readonly UpdateRestaurantController: UpdateRestaurantController,
  ) {}

  @ApiOperation({
    summary: '',
  })
  @ApiBearerAuth()
  @Post('/create-restaurant')
  async create(@Body() body: CreateRestaurant) {
    const httpRequest: HttpRequest = { body };
    return await this.createRestaurantController.execute(httpRequest);
  }

  @ApiOperation({
    summary: '',
  })
  @ApiBearerAuth()
  @Delete('/delete-restaurant')
  async delete(@Query() query: GetOneRestaurant) {
    const { id } = query;
    const httpRequest: HttpRequest = { id };
    return await this.deleteRestaurantController.execute(httpRequest);
  }

  @ApiOperation({
    summary: '',
  })
  @ApiBearerAuth()
  @Patch('/update-restaurant')
  async update(@Body() body: UpdateRestaurant) {
    const httpRequest: HttpRequest = { body };
    return await this.UpdateRestaurantController.execute(httpRequest);
  }
}
