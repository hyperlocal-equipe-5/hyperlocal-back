import { Category } from './category';
import { Ingredient } from './ingredient';
import { Restaurant } from './restaurant';

export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  highlight: boolean;
  image: string;
  ingredients: Ingredient[];
  category: Category;
  restaurant: Restaurant;
  createdAt: string;
  updatedAt: string;
};
