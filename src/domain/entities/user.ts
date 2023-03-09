import { Order } from './order';
import { Review } from './review';
import { Role } from './role';

export type User = {
  userId: string;
  name: string;
  email: string;
  password: string;
  image?: string;
  cellphone?: number;
  createdAt: Date;
  updateAt: Date;
  orders: Order[];
  review: Review[];
  role: Role;
};
