/**
 * type delete
 * with bearer authorization header
 * /admin/restaurant/delete-restaurant?id=23r32rfg
 */

import { Restaurant } from 'src/domain/entities/restaurant';

export type DeleteRestaurantAdminResponse = HttpResponse<Restaurant>;
