/**
 * type patch
 * with bearer authorization header
 * /admin/category/update-category
 */

import { Category } from 'src/domain/entities/category';
import { HttpResponse } from 'src/domain/http/response';

export type UpdateCategoryAdminResponse = HttpResponse<Category>;
