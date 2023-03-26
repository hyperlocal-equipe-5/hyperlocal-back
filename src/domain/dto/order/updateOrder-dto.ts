export type UpdateOrderDto = {
  id: string;
  restaurant: string;
  finished?: boolean;
  products?: {
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
  takeAway?: boolean;
  customerName?: string;
  user?: string;
  table?: string;
};
