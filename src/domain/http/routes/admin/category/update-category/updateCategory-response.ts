/**
 * type patch
 * with bearer authorization header
 * /admin/category/update-category?id=328nr283r7&restaurant=2387ne283e8
 */

import { Category } from 'src/domain/entities/category';

export type UpdateCategoryAdminResponse = HttpResponse<Category>;
