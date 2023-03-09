/**
 * type get
 * /category/get-one?id=d387462384?restaurant=2xr23r23
 */

import { Category } from 'src/domain/entities/category';
import { HttpResponse } from 'src/domain/http/httpResponse';

export type GetOneCategorieResponse = HttpResponse<Category>;
