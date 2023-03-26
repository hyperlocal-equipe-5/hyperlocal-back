export type CreateOrderDto = {
  finished: boolean;
  products: {
    product: string;
    ingredientsAdded?: {
      ingredient: string;
      quantity: number;
    }[];
    ingredientsRemoved?: {
      ingredient: string;
      quantity: number;
    }[];
  }[];
  takeAway?: boolean;
  customerName?: string;
  user?: string;
  table?: string;
  restaurant: string;
};
