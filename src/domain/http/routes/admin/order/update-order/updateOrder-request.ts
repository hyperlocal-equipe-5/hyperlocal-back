/**
 * type patch
 * with bearer authorization header
 * /admin/order/update-order?id=328nr283r7&restaurant=4334f23d32
 */

export type UpdateOrderAdminRequestBody = {
  products?: string[];
  takeAway?: boolean;
  orderNumber?: number;
  customerName?: string;
  user?: string;
  table?: string;
  restaurant: string;
};
