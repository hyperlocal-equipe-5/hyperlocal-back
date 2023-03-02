/**
 * type patch
 * with bearer authorization header
 * /admin/category/update-category?id=328nr283r7
 */

type UpdateCategoryAdminRequestBody = {
  name?: string;
  highlight?: boolean;
  image?: string;
  restaurant: string;
};
