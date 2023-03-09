import { Product } from './product';
import { Restaurant } from './restaurant';

export type Ingredient = {
  ingredientId: string;
  name: string;
  price: number;
  quantity?: number;
  image: string;
  createdAt: Date;
  updateAt: Date;
  product: Product[];
  restaurant: Restaurant;
};
