import { Controller, Query, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { GetAllRestaurantsController } from 'src/presentation/controllers/restaurant/getAllRestaurants-controller';
import { GetOneRestaurantController } from 'src/presentation/controllers/restaurant/getOneRestaurant-controller';
import { GetOneRestaurant } from '../dtos/restaurant/getOneRestaurant-dto';

@ApiTags('/restaurant')
@Controller('/restaurant')
export class RestaurantController {
  constructor(
    private readonly getAllRestaurantsController: GetAllRestaurantsController,
    private readonly getOneRestaurantController: GetOneRestaurantController,
  ) {}

  @ApiOperation({
    summary: 'Route that an authorized account can get one restaurant.',
  })
  @Get('/get-one-restaurant')
  async getOne(@Query() query: GetOneRestaurant) {
    const { id } = query;
    const httpRequest: HttpRequest = { id };
    return await this.getOneRestaurantController.execute(httpRequest);
  }

  @ApiOperation({
    summary: 'Route that an authorized account can get all restaurants.',
  })
  @Get('/get-all-restaurants')
  async getAll() {
    const httpRequest: HttpRequest = {};
    return await this.getAllRestaurantsController.execute(httpRequest);
  }
}
