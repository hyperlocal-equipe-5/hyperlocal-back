import { GetAllRestaurantsUseCase } from 'src/data/usecases/restaurant/getAllRestaurants-usecase';
import { RestaurantRepository } from 'src/infra/repositories/restaurant-repository';
import { GetAllRestaurantsInterface } from 'src/presentation/abstract/controllers/restaurant/getAllRestaurantsController-interface';
import { GetAllRestaurantsController } from 'src/presentation/controllers/restaurant/getAllRestaurants-controller';

export function makeGetAllRestaurantFactory(): GetAllRestaurantsInterface {
  const repository = new RestaurantRepository();
  const getAllrestaurantsUseCase = new GetAllRestaurantsUseCase(repository);

  return new GetAllRestaurantsController(getAllrestaurantsUseCase);
}
