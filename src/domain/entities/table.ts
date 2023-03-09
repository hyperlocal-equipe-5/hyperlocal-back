import { Order } from './order';
import { Restaurant } from './restaurant';

export type Table = {
  tableId: string;
  number: number;
  createdAt: Date;
  updateAt: Date;
  orders: Order[];
  restaurant: Restaurant;
};
