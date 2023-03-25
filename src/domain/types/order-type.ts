export type OrderType = {
  id: string;
  takeAway: boolean;
  orderNumber: number;
  customerName: string;
  finished: boolean;
  products: {
    product: string;
    ingredients: string[];
  }[];
  price: number;
  user: string;
  table: string;
  restaurant: string;
  createdAt: string;
  updatedAt: string;
};
