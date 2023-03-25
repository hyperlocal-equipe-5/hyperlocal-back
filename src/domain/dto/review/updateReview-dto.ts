export type UpdateReviewDto = {
  id: string;
  restaurant: string;
  responses: {
    question: string;
    answer: string;
    stars: number;
  }[];
  user?: string;
};
