/**
 * type post
 * /orders/order
 */

export type PostOrderRequestBody = {
  products: string[];
  table?: string;
  user?: string;
  orderNumber?: string;
  customerName?: string;
  restaurant: string;
};
