export type UpdateCategoryDto = {
  categoryId: string;
  restaurant: string;
  name?: string;
  highlight?: boolean;
  image?: string;
};
