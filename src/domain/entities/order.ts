import { Product } from './product';
import { Restaurant } from './restaurant';
import { Table } from './table';
import { User } from './user';

export type Order = {
  orderId: string;
  takeAway: boolean;
  orderNumber?: number;
  customerName?: string;
  products: Product[];
  createdAt: string;
  updatedAt: string;
  user?: User;
  table?: Table;
  restaurant: Restaurant;
};
