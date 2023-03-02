import { Product } from './product';
import { Restaurant } from './restaurant';
import { Table } from './table';
import { User } from './user';

export type Order = {
  id: string;
  takeAway: boolean;
  orderNumber?: number;
  customerName?: string;
  products: Product[];
  user?: User;
  table?: Table;
  restaurant: Restaurant;
  createdOn: string;
  updatedOn: string;
};
