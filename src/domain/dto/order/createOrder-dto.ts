export type CreateOrderDto = {
  finished: boolean;
  products: { product: string; ingredients: string[] }[];
  takeAway?: boolean;
  customerName?: string;
  user?: string;
  table?: string;
  restaurant: string;
};
