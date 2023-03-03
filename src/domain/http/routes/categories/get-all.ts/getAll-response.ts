/**
 * type get
 * /categories/get-all
 */

import { Category } from 'src/domain/entities/category';

export type GetAllCategoriesResponse = HttpResponse<Category[]>;
