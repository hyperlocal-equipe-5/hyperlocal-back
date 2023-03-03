/**
 * type get
 * with bearer authorization header
 * /admin/ingredient/get-all-ingredients?restaurant=8u93u8z3
 */

import { Ingredient } from 'src/domain/entities/ingredient';

export type GetAllIngredientsAdminResponse = HttpResponse<Ingredient[]>;
