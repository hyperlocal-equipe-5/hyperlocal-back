import { Ingredient } from './ingredient';
import { Product } from './product';
import { Restaurant } from './restaurant';
import { Table } from './table';
import { User } from './user';

export type Order = {
  id: string;
  takeAway: boolean;
  orderNumber?: number;
  customerName?: string;
  finished: boolean;
  products: {
    id: string;
    product: Product;
    ingredientsAdded: {
      id: string;
      ingredient: Ingredient;
      quantity: number;
    }[];
    ingredientsRemoved: {
      id: string;
      ingredient: Ingredient;
      quantity: number;
    }[];
  }[];
  price: number;
  user?: User;
  table?: Table;
  restaurant: Restaurant;
  createdAt: string;
  updatedAt: string;
};
