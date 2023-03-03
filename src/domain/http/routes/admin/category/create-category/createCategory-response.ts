/**
 * type post
 * with bearer authorization header
 * /admin/category/create-category
 */

import { Category } from 'src/domain/entities/category';

export type CreateCategoryResponse = HttpResponse<Category>;
