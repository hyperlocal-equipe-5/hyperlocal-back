/**
 * type patch
 * with bearer authorization header
 * /admin/product/update-product?id=328nr283r7&restaurant=8u93u8z3&restaurant=4yf9n932d
 */

import { Product } from 'src/domain/entities/product';
import { HttpResponse } from 'src/domain/http/response';

export type UpdateProductAdminResponse = HttpResponse<Product>;
