export type CreateOrderDto = {
  products: string[];
  quantities: number[];
  takeAway?: boolean;
  customerName?: string;
  user?: string;
  table?: string;
  restaurant: string;
};
