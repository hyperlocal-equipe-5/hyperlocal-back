/**
 * type get
 * with bearer authorization header
 * /admin/category/get-all-categories?restaurant=8u93u8z3
 */

import { Category } from 'src/domain/entities/category';
import { HttpResponse } from 'src/domain/http/httpResponse';

export type GetAllCategoriesAdminResponse = HttpResponse<Category[]>;
