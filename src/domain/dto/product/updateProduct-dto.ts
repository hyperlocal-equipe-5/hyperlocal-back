export type UpdateProductDto = {
  id: string;
  restaurant: string;
  name?: string;
  price?: number;
  description?: string;
  highlight?: boolean;
  image?: string;
  ingredients?: string[];
  category?: string;
};
