export type ReviewType = {
  id: string;
  responses: {
    question: string;
    answer: string;
    stars: number;
  }[];
  user: string;
  restaurant: string;
  createdAt: string;
  updatedAt: string;
};
