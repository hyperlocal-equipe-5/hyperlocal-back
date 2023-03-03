/**
 * type get
 * with bearer authorization header
 * /admin/category/get-one-category?id=328nr283r7&restaurant=8u93u8z3
 */

import { Category } from 'src/domain/entities/category';

export type GetOneCategoryAdminResponse = HttpResponse<Category>;
