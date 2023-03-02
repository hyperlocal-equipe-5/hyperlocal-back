/**
 * type post
 * /orders/order
 */

type PostOrderRequestBody = {
  products: string[];
  table?: string;
  user?: string;
  orderNumber?: string;
  customerName?: string;
  restaurant: string;
};
