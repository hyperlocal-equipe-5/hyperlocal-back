import { Restaurant } from 'src/domain/entities/restaurant';

export interface RestaurantEntityInterface {
  validate(): void;
  getBody(): Restaurant;
  updateBody(): Restaurant;
}
