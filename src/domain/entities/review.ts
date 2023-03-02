import { Restaurant } from './restaurant';

export type Review = {
  id: string;
  stars: number;
  comment: string;
  user?: User;
  restaurant: Restaurant;
  createdOn: string;
  updatedOn: string;
};
