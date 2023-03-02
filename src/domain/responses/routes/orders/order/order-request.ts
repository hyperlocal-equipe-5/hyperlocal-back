/**
 * type post
 * /orders/order
 */

type PostOrderRequest = {
  //product id array
  products: string[];

  //table id
  table?: string;

  //user id
  user?: string;

  orderNumber?: string;
  customerName?: string;
  restaurant: string;
};
