import { Restaurant } from 'src/domain/entities/restaurant';

export interface GetAllRestaurantsUseCaseInterface {
  execute(): Promise<Restaurant[]>;
}
