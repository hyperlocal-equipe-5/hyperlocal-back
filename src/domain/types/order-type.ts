export type OrderType = {
  id: string;
  takeAway: boolean;
  orderNumber: number;
  customerName: string;
  products: string[];
  quantities: number[];
  user: string;
  table: string;
  restaurant: string;
  createdAt: string;
  updatedAt: string;
};
