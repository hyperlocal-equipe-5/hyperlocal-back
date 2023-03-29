import { Restaurant } from './restaurant';
import { ReviewQuestion } from './reviewQuestion';
import { User } from './user';

export type Review = {
  id: string;
  responses: {
    id: string;
    question: ReviewQuestion;
    answer: string;
    stars: number;
  }[];
  user?: User;
  restaurant: Restaurant;
  createdAt: string;
  updatedAt: string;
};
