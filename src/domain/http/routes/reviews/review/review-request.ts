/**
 * type post
 * /reviews/review
 */

import { Restaurant } from 'src/domain/entities/restaurant';
import { User } from 'src/domain/entities/user';

export type ReviewRequestBody = {
  stars: number;
  comment: string;
  user?: User;
  restaurant: Restaurant;
};
