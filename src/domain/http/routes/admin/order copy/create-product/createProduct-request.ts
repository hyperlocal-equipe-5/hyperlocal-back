/**
 * type post
 * with bearer authorization header
 * /admin/product/create-product
 */

type CreateProductRequestBody = {
  name: string;
  price: number;
  description: string;
  highlight: boolean;
  image: string;
  ingredients: Ingredient[];
  category: Category;
  restaurant: Restaurant;
};
