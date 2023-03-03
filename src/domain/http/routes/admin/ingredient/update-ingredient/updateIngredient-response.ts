/**
 * type patch
 * with bearer authorization header
 * /admin/ingredient/update-ingredient
 */

import { Ingredient } from 'src/domain/entities/ingredient';
import { HttpResponse } from 'src/domain/http/response';

export type UpdateIngredientAdminResponse = HttpResponse<Ingredient>;
