import { Module } from '@nestjs/common';
import { makeCreateRestaurantFactory } from 'src/main/factories/restaurant/createRestaurant-factory';
import { makeDeleteRestaurantFactory } from 'src/main/factories/restaurant/deleteRestaurant-factory';
import { makeGetAllRestaurantFactory } from 'src/main/factories/restaurant/getAllRestaurants-factory';
import { makeGetOneRestaurantFactory } from 'src/main/factories/restaurant/getOneRestaurant-factory';
import { makeUpdateRestaurantFactory } from 'src/main/factories/restaurant/updateRestaurant-factory';
import { CreateRestaurantController } from 'src/presentation/controllers/restaurant/createRestaurant-controller';
import { DeleteRestaurantController } from 'src/presentation/controllers/restaurant/deleteRestaurant-controller';
import { GetAllRestaurantsController } from 'src/presentation/controllers/restaurant/getAllRestaurants-controller';
import { GetOneRestaurantController } from 'src/presentation/controllers/restaurant/getOneRestaurant-controller';
import { UpdateRestaurantController } from 'src/presentation/controllers/restaurant/updateRestaurant-controller';
import { RestaurantControllerAdmin } from '../controllers/restaurant.controller.admin';

@Module({
  controllers: [RestaurantControllerAdmin],
  providers: [
    {
      provide: CreateRestaurantController,
      useFactory: makeCreateRestaurantFactory,
    },
    {
      provide: DeleteRestaurantController,
      useFactory: makeDeleteRestaurantFactory,
    },
    {
      provide: UpdateRestaurantController,
      useFactory: makeUpdateRestaurantFactory,
    },
    {
      provide: GetAllRestaurantsController,
      useFactory: makeGetAllRestaurantFactory,
    },
    {
      provide: GetOneRestaurantController,
      useFactory: makeGetOneRestaurantFactory,
    },
  ],
})
export class RestaurantModule {}
