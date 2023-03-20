/**
 * type get
 * with bearer authorization header
 * /admin/ingredient/get-one-ingredient?id=iuedy8723y283&restaurant=8u93u8z3
 */

import { Ingredient } from 'src/domain/entities/ingredient';
import { HttpResponse } from 'src/domain/http/httpResponse';

export type GetOneIngredientAdminResponse = HttpResponse<Ingredient>;
