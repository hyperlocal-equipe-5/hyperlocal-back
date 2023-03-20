/**
 * type delete
 * with bearer authorization header
 * /admin/ingredient/delete-ingredient?id=23r32rfg&restaurant=859f83u
 */

import { Ingredient } from 'src/domain/entities/ingredient';
import { HttpResponse } from 'src/domain/http/httpResponse';

export type DeleteIngredientAdminResponse = HttpResponse<Ingredient>;
