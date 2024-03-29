/**
 * type post
 * with bearer authorization header
 * /admin/ingredient/create-ingredient
 */

import { Ingredient } from 'src/domain/entities/ingredient';
import { HttpResponse } from 'src/domain/http/httpResponse';

export type CreateIngredientResponse = HttpResponse<Ingredient>;
