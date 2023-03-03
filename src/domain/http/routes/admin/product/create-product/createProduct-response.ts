/**
 * type post
 * with bearer authorization header
 * /admin/product/create-product
 */

import { Product } from 'src/domain/entities/product';

export type CreateProductResponse = HttpResponse<Product>;
