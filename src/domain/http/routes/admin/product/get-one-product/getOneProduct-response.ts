/**
 * type get
 * with bearer authorization header
 * /admin/product/get-one-product?id=iuedy8723y283&restaurant=8u93u8z3
 */

import { Product } from 'src/domain/entities/product';

export type GetOneProductAdminResponse = HttpResponse<Product>;
