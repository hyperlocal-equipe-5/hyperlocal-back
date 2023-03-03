/**
 * type patch
 * with bearer authorization header
 * /admin/ingredient/update-ingredient?id=328nr283r7&restaurant=932nyd9329d8
 */

export type UpdateIngredientAdminRequestBody = {
  name?: string;
  price?: number;
  image?: string;
  quantity?: number;
};
