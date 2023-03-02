/**
 * type post
 * /reviews/review
 */

type ReviewRequest = {
  stars: number;
  comment: string;
  user?: User;
  restaurant: Restaurant;
};
