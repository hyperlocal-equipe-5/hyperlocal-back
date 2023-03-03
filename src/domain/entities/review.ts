import { Restaurant } from './restaurant';
import { User } from './user';

export type Review = {
  id: string;
  stars: number;
  comment: string;
  user?: User;
  restaurant: Restaurant;
  createdOn: string;
  updatedOn: string;
};
