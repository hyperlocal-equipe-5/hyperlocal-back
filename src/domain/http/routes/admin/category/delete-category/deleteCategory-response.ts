/**
 * type delete
 * with bearer authorization header
 * /admin/category/delete-category?id=23r32rfg&restaurant=859f83u
 */

import { Category } from 'src/domain/entities/category';
import { HttpResponse } from 'src/domain/http/httpResponse';

export type DeleteCategoryAdminResponse = HttpResponse<Category>;
