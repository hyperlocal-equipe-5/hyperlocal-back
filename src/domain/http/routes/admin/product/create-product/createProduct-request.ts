/**
 * type post
 * with bearer authorization header
 * /admin/product/create-product
 */

export type CreateProductRequestBody = {
  name: string;
  price: number;
  description: string;
  highlight: boolean;
  image: string;
  ingredients: string[];
  category: string;
  restaurant: string;
};
