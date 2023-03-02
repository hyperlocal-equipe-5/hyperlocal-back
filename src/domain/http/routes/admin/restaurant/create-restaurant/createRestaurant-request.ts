/**
 * type post
 * with bearer authorization header
 * /admin/restaurant/create-restaurant
 */

type CreateRestaurantRequestBody = {
  telephone: number;
  email: string;
  name: string;
  address: string;
  logo: string;
  colorScheme: number;
};
