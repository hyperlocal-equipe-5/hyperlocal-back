/**
 * type get
 * with bearer authorization header
 * /admin/restaurant/get-all-restaurants
 */

import { Restaurant } from 'src/domain/entities/restaurant';

export type GetAllRestaurantsAdminResponse = HttpResponse<Restaurant[]>;
