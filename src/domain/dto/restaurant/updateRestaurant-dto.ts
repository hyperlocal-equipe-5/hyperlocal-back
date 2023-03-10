export type UpdateRestaurantDto = {
  restaurantId: string;
  telephone?: number;
  email?: string;
  name?: string;
  address?: string;
  logo?: string;
  colorScheme?: number;
};
