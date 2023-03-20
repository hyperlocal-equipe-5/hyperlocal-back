export type UpdateOrderDto = {
  id: string;
  restaurant: string;
  products?: string[];
  quantities?: number[];
  takeAway?: boolean;
  customerName?: string;
  user?: string;
  table?: string;
};
