import { Restaurant } from './restaurant';

export type Ingredient = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity?: number;
  restaurant: Restaurant;
  createdOn: string;
  updatedOn: string;
};
