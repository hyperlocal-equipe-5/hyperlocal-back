/**
 * type post
 * with bearer authorization header
 * /admin/category/create-category
 */

type CreateCategoryRequestBody = {
  name: string;
  highlight: boolean;
  image: string;
  restaurant: string;
};
