export type UpdateOrderDto = {
  id: string;
  restaurant: string;
  products?: string[];
  quantities?: number[];
  takeAway?: boolean;
  orderNumber?: number;
  customerName?: string;
  user?: string;
  table?: string;
};
