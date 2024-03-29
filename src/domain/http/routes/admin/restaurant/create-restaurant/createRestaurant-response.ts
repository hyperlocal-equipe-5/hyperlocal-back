/**
 * type post
 * with bearer authorization header
 * /admin/restaurant/create-restaurant
 */

import { Restaurant } from 'src/domain/entities/restaurant';
import { HttpResponse } from 'src/domain/http/httpResponse';

export type CreateRestaurantResponse = HttpResponse<Restaurant>;
