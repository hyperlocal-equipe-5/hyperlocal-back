import { Restaurant } from './restaurant';
import { Table } from './table';
import { User } from './user';

export type Order = {
  orderId: string;
  takeAway: boolean;
  customerName: string;
  createdAt: Date;
  updateAt: Date;
  user?: User;
  table: Table;
  restaurant: Restaurant;
};
