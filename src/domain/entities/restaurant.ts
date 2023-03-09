import { Category } from './category';
import { Ingredient } from './ingredient';
import { Order } from './order';
import { Product } from './product';
import { Review } from './review';
import { Role } from './role';
import { Table } from './table';

export type Restaurant = {
  restaurantId: string;
  telephone: number;
  email: string;
  name: string;
  address: string;
  logo: string;
  colorScheme: number;
  createdAt: Date;
  updateAt: Date;
  category: Category[];
  ingredient: Ingredient[];
  order: Order[];
  product: Product[];
  review: Review[];
  roles: Role[];
  tables: Table;
};
