/**
 * type post
 * with bearer authorization header
 * /admin/ingredient/create-ingredient
 */

type CreateIngredientRequestBody = {
  name: string;
  price?: number;
  image?: string;
  quantity?: number;
  restaurant: Restaurant;
};
