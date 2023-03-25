export type UpdateOrderDto = {
  id: string;
  restaurant: string;
  finished: boolean;
  products?: { product: string; ingredients: string[] }[];
  takeAway?: boolean;
  customerName?: string;
  user?: string;
  table?: string;
};
