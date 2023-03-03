/**
 * type post
 * with bearer authorization header
 * /admin/restaurant/create-restaurant
 */

export type CreateRestaurantRequestBody = {
  telephone: number;
  email: string;
  name: string;
  address: string;
  logo: string;
  colorScheme: number;
};
