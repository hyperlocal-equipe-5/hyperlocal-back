/**
 * type post
 * with bearer authorization header
 * /admin/category/create-category
 */

import { Category } from 'src/domain/entities/category';
import { HttpResponse } from 'src/domain/http/httpResponse';

export type CreateCategoryResponse = HttpResponse<Category>;
