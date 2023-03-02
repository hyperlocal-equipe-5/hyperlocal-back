/**
 * type patch
 * with bearer authorization header
 * /admin/restaurant/update-restaurant?id=328nr283r7
 */

type UpdateRestaurantAdminRequestBody = {
  telephone: number;
  email: string;
  name: string;
  address: string;
  logo: string;
  colorScheme: number;
};
