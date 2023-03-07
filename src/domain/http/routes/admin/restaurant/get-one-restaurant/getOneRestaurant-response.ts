/**
 * type get
 * with bearer authorization header
 * /admin/restaurant/get-one-restaurant?id=iuedy8723y283
 */

import { Restaurant } from 'src/domain/entities/restaurant';
import { HttpResponse } from 'src/domain/http/httpResponse';

export type GetOneRestaurantAdminResponse = HttpResponse<Restaurant>;
