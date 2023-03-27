export type OrderType = {
  id: string;
  takeAway: boolean;
  orderNumber: number;
  customerName: string;
  finished: boolean;
  products: {
    id: string;
    product: string;
    ingredientsAdded: {
      id: string;
      ingredient: string;
      quantity: number;
    }[];
    ingredientsRemoved: {
      id: string;
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
