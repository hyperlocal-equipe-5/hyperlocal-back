import { Controller, Post, Body, Delete, Query, Patch } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { CreateRestaurantController } from 'src/presentation/controllers/restaurant/createRestaurant-controller';
import { DeleteRestaurantController } from 'src/presentation/controllers/restaurant/deleteRestaurant-controller';
import { UpdateRestaurantController } from 'src/presentation/controllers/restaurant/updateRestaurant-controller';

@ApiTags('/admin/restaurant')
@Controller('/admin/restaurant')
export class RestaurantControllerAdmin {
  constructor(
    private readonly createRestaurantController: CreateRestaurantController,
    private readonly deleteRestaurantController: DeleteRestaurantController,
    private readonly UpdateRestaurantController: UpdateRestaurantController,
  ) {}

  @ApiOperation({
    summary: ''
  })
  @Post('/create-restaurant')
  async create(@Body() body) {
    const httpRequest: HttpRequest = { body };
    return await this.createRestaurantController.execute(httpRequest);
  }

  @ApiOperation({
    summary: ''
  })
  @Delete('/delete-restaurant')
  async delete(@Query() query) {
    const { id } = query;
    const httpRequest: HttpRequest = { id };
    return await this.deleteRestaurantController.execute(httpRequest);
  }

  @ApiOperation({
    summary: ''
  })
  @Patch('/update-restaurant')
  async update(@Body() body) {
    const httpRequest: HttpRequest = { body };
    return await this.UpdateRestaurantController.execute(httpRequest);
  }
}
