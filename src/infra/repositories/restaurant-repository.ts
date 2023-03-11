import { Restaurant } from 'src/domain/entities/restaurant';
import { RestaurantType } from 'src/domain/types/restaurant-type';
import { RestaurantRepositoryInterface } from '../abstract/repositories/restaurantRepository-interface';
import { prismaDatabase } from '../database/prisma-database';

export class RestaurantRepository implements RestaurantRepositoryInterface {
  public async create(restaurantBody: RestaurantType): Promise<Restaurant> {
    return await prismaDatabase.restaurant
      .create({ data: restaurantBody })
      .then((data) => {
        prismaDatabase.$disconnect();
        return data;
      });
  }

  public async delete(restaurantId: string): Promise<Restaurant> {
    return await prismaDatabase.restaurant
      .delete({
        where: { id: restaurantId },
      })
      .then((data) => {
        prismaDatabase.$disconnect();
        return data;
      });
  }

  public async getOne(restaurantId: string): Promise<Restaurant> {
    return await prismaDatabase.restaurant
      .findUnique({
        where: { id: restaurantId },
      })
      .then((data) => {
        prismaDatabase.$disconnect();
        return data;
      });
  }

  public async getAll(): Promise<Restaurant[]> {
    return await prismaDatabase.restaurant.findMany().then((data) => {
      prismaDatabase.$disconnect();
      return data;
    });
  }

  public async update(restaurantBody: RestaurantType): Promise<Restaurant> {
    return await prismaDatabase.restaurant
      .update({
        where: { id: restaurantBody.id },
        data: restaurantBody,
      })
      .then((data) => {
        prismaDatabase.$disconnect();
        return data;
      });
  }
}
