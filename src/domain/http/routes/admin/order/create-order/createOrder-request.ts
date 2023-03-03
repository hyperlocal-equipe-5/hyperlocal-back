/**
 * type post
 * with bearer authorization header
 * /admin/order/create-order
 */

export type CreateOrderRequestBody = {
  products: string[];
  takeAway: boolean;
  orderNumber?: number;
  customerName?: string;
  user?: string;
  table?: string;
  restaurant: string;
};
