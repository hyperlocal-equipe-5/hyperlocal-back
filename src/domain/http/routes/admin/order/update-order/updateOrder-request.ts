/**
 * type patch
 * with bearer authorization header
 * /admin/order/update-order?id=328nr283r7
 */

type UpdateOrderAdminRequestBody = {
  products?: string[];
  takeAway?: boolean;
  orderNumber?: number;
  customerName?: string;
  user?: User;
  table?: Table;
  restaurant: Restaurant;
};
