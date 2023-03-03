/**
 * type get
 * with bearer authorization header
 * /admin/category/get-all-categories?restaurant=8u93u8z3
 */

import { Category } from 'src/domain/entities/category';

export type GetAllCategoriesAdminResponse = HttpResponse<Category[]>;
