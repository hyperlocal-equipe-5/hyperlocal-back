/**
 * type patch
 * with bearer authorization header
 * /admin/ingredient/update-ingredient?id=328nr283r7&restaurant=932nyd9329d8
 */

import { Ingredient } from 'src/domain/entities/ingredient';
import { HttpResponse } from 'src/domain/http/response';

export type UpdateIngredientAdminResponse = HttpResponse<Ingredient>;
