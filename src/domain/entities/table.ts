import { Restaurant } from './restaurant';

export type Table = {
  id: string;
  number: number;
  restaurant: Restaurant;
  createdOn: string;
  updatedOn: string;
};
