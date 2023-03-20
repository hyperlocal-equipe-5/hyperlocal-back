import { Restaurant } from './restaurant';

export type Table = {
  id: string;
  number: number;
  restaurant: Restaurant;
  createdAt: string;
  updatedAt: string;
};
