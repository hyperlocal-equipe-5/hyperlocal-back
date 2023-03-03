export type UpdateReviewDto = {
  id: string;
  restaurant: string;
  stars?: number;
  comment?: string;
  user?: string;
};
