import { Product } from './product';
import { Restaurant } from './restaurant';

export type Category = {
  id: string;
  name: string;
  highlight: boolean;
  image: string;
  products: Product[];
  restaurant: Restaurant;
  createdOn: string;
  updatedOn: string;
};
