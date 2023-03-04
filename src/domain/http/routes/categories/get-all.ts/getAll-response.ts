/**
 * type get
 * /categories/get-all?restaurant=u92umf923
 */

import { Category } from 'src/domain/entities/category';
import { HttpResponse } from 'src/domain/http/response';

export type GetAllCategoriesResponse = HttpResponse<Category[]>;
