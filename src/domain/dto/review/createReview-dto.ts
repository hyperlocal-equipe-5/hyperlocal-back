export type CreateReviewDto = {
  responses: {
    question: string;
    answer: string;
    stars: number;
  }[];
  user?: string;
  restaurant: string;
};
