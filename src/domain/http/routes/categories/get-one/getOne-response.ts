/**
 * type get
 * /categories/get-one?id=d387462384
 */

import { Category } from 'src/domain/entities/category';

export type GetOneCategorieResponse = HttpResponse<Category>;
