import { Restaurant } from './restaurant';

export type Ingredient = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity?: number;
  restaurant: Restaurant;
  createdAt: string;
  updatedAt: string;
};
