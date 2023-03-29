export type UpdateReviewDto = {
  id: string;
  restaurant: string;
  responses: {
    id: string;
    question: string;
    answer: string;
    stars: number;
  }[];
  user?: string;
};
