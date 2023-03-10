export type UpdateProductDto = {
  productId: string;
  restaurant: string;
  name: string;
  price: number;
  description: string;
  highlight: boolean;
  image: string;
  ingredients: string[];
  category: string;
};
