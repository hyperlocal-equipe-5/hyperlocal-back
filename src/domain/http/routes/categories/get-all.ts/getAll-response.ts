/**
 * type get
 * /categories/get-all
 */

import { Category } from 'src/domain/entities/category';
import { HttpResponse } from 'src/domain/http/response';

export type GetAllCategoriesResponse = HttpResponse<Category[]>;
