export type UpdateIngredientDto = {
  id: string;
  restaurant: string;
  name?: string;
  price?: number;
  image?: string;
  quantity?: number;
};
