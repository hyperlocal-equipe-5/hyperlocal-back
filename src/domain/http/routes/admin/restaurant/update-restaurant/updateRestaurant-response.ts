/**
 * type patch
 * with bearer authorization header
 * /admin/restaurant/update-restaurant
 */

import { Restaurant } from 'src/domain/entities/restaurant';
import { HttpResponse } from 'src/domain/http/response';

export type UpdateRestaurantAdminResponse = HttpResponse<Restaurant>;
