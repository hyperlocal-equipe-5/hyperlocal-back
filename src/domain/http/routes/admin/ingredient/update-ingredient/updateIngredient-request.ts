/**
 * type patch
 * with bearer authorization header
 * /admin/ingredient/update-ingredient?id=328nr283r7
 */

type UpdateIngredientAdminRequestBody = {
  name?: string;
  price?: number;
  image?: string;
  quantity?: number;
  restaurant: Restaurant;
};
