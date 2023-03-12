import { Controller, Query, Get } from '@nestjs/common';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { GetAllRestaurantsController } from 'src/presentation/controllers/restaurant/getAllRestaurants-controller';
import { GetOneRestaurantController } from 'src/presentation/controllers/restaurant/getOneRestaurant-controller';

@Controller('/restaurant')
export class RestaurantController {
  constructor(
    private readonly getAllRestaurantsController: GetAllRestaurantsController,
    private readonly getOneRestaurantController: GetOneRestaurantController,
  ) {}

  @Get('/get-one-restaurant')
  async getOne(@Query() query) {
    const { id } = query;
    const httpRequest: HttpRequest = { id };
    return await this.getOneRestaurantController.execute(httpRequest);
  }

  @Get('/get-all-restaurants')
  async getAll() {
    const httpRequest: HttpRequest = {};
    return await this.getAllRestaurantsController.execute(httpRequest);
  }
}
