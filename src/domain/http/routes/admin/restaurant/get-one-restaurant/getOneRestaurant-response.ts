/**
 * type get
 * with bearer authorization header
 * /admin/restaurant/get-one-restaurant?id=iuedy8723y283
 */

import { Restaurant } from 'src/domain/entities/restaurant';

export type GetOneRestaurantAdminResponse = HttpResponse<Restaurant>;
