/**
 * type patch
 * with bearer authorization header
 * /admin/category/update-category?id=328nr283r7&restaurant=2387ne283e8
 */

export type UpdateCategoryAdminRequestBody = {
  name?: string;
  highlight?: boolean;
  image?: string;
};
