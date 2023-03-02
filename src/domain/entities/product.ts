import { Category } from './category';
import { Ingredient } from './ingredient';
import { Restaurant } from './restaurant';

export type Product = {
  name: string;
  price: number;
  description: string;
  highlight: boolean;
  image: string;
  ingredients: Ingredient[];
  category: Category;
  restaurant: Restaurant;
  createdOn: string;
  updatedOn: string;
};
