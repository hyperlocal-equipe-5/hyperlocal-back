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
import { CreateRestaurantController } from 'src/presentation/controllers/restaurant/createRestaurant-controller';
import { DeleteRestaurantController } from 'src/presentation/controllers/restaurant/deleteRestaurant-controller';
import { GetAllRestaurantsController } from 'src/presentation/controllers/restaurant/getAllRestaurants-controller';
import { GetOneRestaurantController } from 'src/presentation/controllers/restaurant/getOneRestaurant-controller';
import { UpdateRestaurantController } from 'src/presentation/controllers/restaurant/updateRestaurant-controller';

@Controller('/admin/restaurant')
export class RestaurantControllerAdmin {
  constructor(
    private readonly createRestaurantController: CreateRestaurantController,
    private readonly deleteRestaurantController: DeleteRestaurantController,
    private readonly updateRestaurantController: UpdateRestaurantController,
    private readonly getAllRestaurantsController: GetAllRestaurantsController,
    private readonly getOneRestaurantController: GetOneRestaurantController,
  ) {}

  @Post('/create-restaurant')
  async create(@Body() body) {
    const httpRequest: HttpRequest = { body };
    return await this.createRestaurantController.execute(httpRequest);
  }

  @Delete('/delete-restaurant')
  async delete(@Query() query) {
    const { id } = query;
    const httpRequest: HttpRequest = { id };
    return await this.deleteRestaurantController.execute(httpRequest);
  }

  @Patch('/update-restaurant')
  async update(@Body() body) {
    const httpRequest: HttpRequest = { body };
    return await this.updateRestaurantController.execute(httpRequest);
  }

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
