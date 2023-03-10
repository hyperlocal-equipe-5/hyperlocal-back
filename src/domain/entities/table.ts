import { Order } from './order';
import { Restaurant } from './restaurant';

export type Table = {
  tableId: string;
  number: number;
  createdAt: string;
  updatedAt: string;
  orders: Order[];
  restaurant: Restaurant;
};
