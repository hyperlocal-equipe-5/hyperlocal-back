/**
 * type get
 * with bearer authorization header
 * /admin/ingredient/get-all-ingredients?restaurant=8u93u8z3
 */

import { Ingredient } from 'src/domain/entities/ingredient';
import { HttpResponse } from 'src/domain/http/httpResponse';

export type GetAllIngredientsAdminResponse = HttpResponse<Ingredient[]>;
