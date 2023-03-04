export type CreateOrderDto = {
  products: string[];
  takeAway?: boolean;
  orderNumber?: number;
  customerName?: string;
  user?: string;
  table?: string;
  restaurant: string;
};
