/**
 * type post
 * with bearer authorization header
 * /admin/restaurant/create-restaurant
 */

import { Restaurant } from 'src/domain/entities/restaurant';

export type CreateRestaurantResponse = HttpResponse<Restaurant>;
