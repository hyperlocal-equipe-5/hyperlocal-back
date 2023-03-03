/**
 * type post
 * with bearer authorization header
 * /admin/ingredient/create-ingredient
 */

import { Ingredient } from 'src/domain/entities/ingredient';

export type CreateIngredientResponse = HttpResponse<Ingredient>;
