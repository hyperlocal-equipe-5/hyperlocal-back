export type CreateIngredientDto = {
  name: string;
  price?: number;
  image?: string;
  quantity?: number;
  restaurant: string;
};
