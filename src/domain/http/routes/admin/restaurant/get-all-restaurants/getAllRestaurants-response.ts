/**
 * type get
 * with bearer authorization header
 * /admin/restaurant/get-all-restaurants
 */

import { Restaurant } from 'src/domain/entities/restaurant';
import { HttpResponse } from 'src/domain/http/httpResponse';

export type GetAllRestaurantsAdminResponse = HttpResponse<Restaurant[]>;
