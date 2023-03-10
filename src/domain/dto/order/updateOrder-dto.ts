export type UpdateOrderDto = {
  orderId: string;
  restaurant: string;
  products?: string[];
  takeAway?: boolean;
  orderNumber?: number;
  customerName?: string;
  user?: string;
  table?: string;
};
