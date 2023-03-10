import { Order } from './order';
import { Restaurant } from './restaurant';
import { Review } from './review';
import { Role } from './role';

export type User = {
  userId: string;
  name: string;
  email: string;
  password: string;
  image?: string;
  cellphone?: number;
  createdAt: string;
  updatedAt: string;
  orders: Order[];
  review: Review[];
  role: Role;
  restaurant: Restaurant;
};
