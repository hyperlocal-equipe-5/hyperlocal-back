export type UpdateReviewDto = {
  reviewId: string;
  restaurant: string;
  stars?: number;
  comment?: string;
  user?: string;
};
