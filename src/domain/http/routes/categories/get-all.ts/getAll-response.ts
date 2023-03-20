/**
 * type get
 * /categoriy/get-all?restaurant=u92umf923
 */

import { Category } from 'src/domain/entities/category';
import { HttpResponse } from 'src/domain/http/httpResponse';

export type GetAllCategoriesResponse = HttpResponse<Category[]>;
