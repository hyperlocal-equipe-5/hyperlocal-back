export type CreateOrderDto = {
  products: string[];
  quantities: number[];
  takeAway?: boolean;
  orderNumber?: number;
  customerName?: string;
  user?: string;
  table?: string;
  restaurant: string;
};
