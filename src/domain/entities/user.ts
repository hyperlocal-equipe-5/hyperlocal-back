import { Restaurant } from './restaurant';
import { Role } from './role';

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  image?: string;
  cellphone?: number;
  role: Role;
  restaurant: Restaurant;
  createdAt: string;
  updatedAt: string;
};
