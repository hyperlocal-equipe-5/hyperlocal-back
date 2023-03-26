export type OrderType = {
  id: string;
  takeAway: boolean;
  orderNumber: number;
  customerName: string;
  finished: boolean;
  products: {
    product: string;
    ingredientsAdded: {
      ingredient: string;
      quantity: number;
    }[];
    ingredientsRemoved: {
      ingredient: string;
      quantity: number;
    }[];
  }[];
  price: number;
  user: string;
  table: string;
  restaurant: string;
  createdAt: string;
  updatedAt: string;
};
