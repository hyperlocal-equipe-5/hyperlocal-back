/**
 * type patch
 * with bearer authorization header
 * /admin/restaurant/update-restaurant?id=328nr283r7
 */

import { Restaurant } from 'src/domain/entities/restaurant';

export type UpdateRestaurantAdminResponse = HttpResponse<Restaurant>;
