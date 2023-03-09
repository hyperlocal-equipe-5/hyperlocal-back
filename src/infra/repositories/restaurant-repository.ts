import { Restaurant } from "src/domain/entities/restaurant";
import { RestaurantType } from "src/domain/types/restaurant-type";
import { RestaurantRepositoryInterface } from "../abstract/repositories/restaurantRepository-interface";

export class RestaurantRepository implements RestaurantRepositoryInterface{
  public create(restaurantBody: RestaurantType): Promise<Restaurant> {
    throw new Error("Method not implemented.");
  }
  public delete(restaurantId: string): Promise<Restaurant> {
    throw new Error("Method not implemented.");
  }
  public getOne(restaurantId: string): Promise<Restaurant> {
    throw new Error("Method not implemented.");
  }
  public getAll(): Promise<Restaurant[]> {
    throw new Error("Method not implemented.");
  }
  public update(restaurantBody: RestaurantType): Promise<Restaurant> {
    throw new Error("Method not implemented.");
  }

}
