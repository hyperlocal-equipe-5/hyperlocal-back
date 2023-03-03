/**
 * type get
 * with bearer authorization header
 * /admin/ingredient/get-one-ingredient?id=iuedy8723y283&restaurant=8u93u8z3
 */

import { Ingredient } from 'src/domain/entities/ingredient';

export type GetOneIngredientAdminResponse = HttpResponse<Ingredient>;
