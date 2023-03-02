/**
 * type post
 * with bearer authorization header
 * /admin/order/create-order
 */

type CreateOrderRequestBody = {
  products: string[];
  takeAway: boolean;
  orderNumber?: number;
  customerName?: string;
  user?: User;
  table?: Table;
  restaurant: Restaurant;
};
