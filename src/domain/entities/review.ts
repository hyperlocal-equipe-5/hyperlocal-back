import { Restaurant } from './restaurant';
import { User } from './user';

export type Review = {
  reviewId: string;
  stars: number;
  comment: string;
  createdAt: Date;
  updateAt: Date;
  user?: User;
  restaurant: Restaurant;
};
