export type UpdateProductDto = {
  id: string;
  restaurant: string;
  products?: string[];
  takeAway?: boolean;
  orderNumber?: number;
  customerName?: string;
  user?: string;
  table?: string;
};
