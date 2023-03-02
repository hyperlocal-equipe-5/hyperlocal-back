/**
 * type post
 * /reviews/review
 */

type ReviewRequestBody = {
  stars: number;
  comment: string;
  user?: User;
  restaurant: Restaurant;
};
