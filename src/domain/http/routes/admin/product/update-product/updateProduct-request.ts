/**
 * type patch
 * with bearer authorization header
 * /admin/product/update-product?id=328nr283r7
 */

type UpdateProductAdminRequestBody = {
  products?: string[];
  takeAway?: boolean;
  orderNumber?: number;
  customerName?: string;
  user?: User;
  table?: Table;
  restaurant: Restaurant;
};
