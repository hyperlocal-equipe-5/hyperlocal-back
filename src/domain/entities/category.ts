import { Product } from './product';
import { Restaurant } from './restaurant';

export type Category = {
  categoryId: string;
  name: string;
  highlight: boolean;
  image: string;
  createdAt: string;
  updatedAt: string;
  restaurant: Restaurant;
  products: Product[];
};
