/**
 * type get
 * with bearer authorization header
 * /admin/product/get-all-products?restaurant=8u93u8z3
 */

import { Product } from 'src/domain/entities/product';

export type GetAllProductsAdminResponse = HttpResponse<Product[]>;
