import { Restaurant } from './restaurant';
import { User } from './user';

export type Review = {
  reviewId: string;
  stars: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
  user?: User;
  restaurant: Restaurant;
};
