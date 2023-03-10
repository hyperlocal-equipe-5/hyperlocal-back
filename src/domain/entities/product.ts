import { Category } from './category';
import { Ingredient } from './ingredient';
import { Order } from './order';
import { Restaurant } from './restaurant';

export type Product = {
  productId: string;
  name: string;
  price: number;
  description: string;
  highlight: boolean;
  image: string;
  createdAt: string;
  updatedAt: string;
  order: Order[];
  ingredients: Ingredient[];
  category: Category;
  restaurant: Restaurant;
};
