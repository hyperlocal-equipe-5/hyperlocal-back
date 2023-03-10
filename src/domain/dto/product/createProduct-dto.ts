export type CreateProductDto = {
  name: string;
  price?: number;
  description?: string;
  highlight?: boolean;
  image?: string;
  ingredients?: string[];
  category?: string;
  restaurant: string;
};
