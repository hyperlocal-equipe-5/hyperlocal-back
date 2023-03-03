/**
 * type patch
 * with bearer authorization header
 * /admin/product/update-product?id=328nr283r7&restaurant=8u93u8z3&restaurant=4yf9n932d
 */

export type UpdateProductAdminRequestBody = {
  products?: string[];
  takeAway?: boolean;
  orderNumber?: number;
  customerName?: string;
  user?: string;
  table?: string;
  restaurant: string;
};
