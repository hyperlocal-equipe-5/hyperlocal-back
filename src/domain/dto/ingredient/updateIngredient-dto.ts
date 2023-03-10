export type UpdateIngredientDto = {
  ingredientId: string;
  restaurant: string;
  name?: string;
  price?: number;
  image?: string;
  quantity?: number;
};
