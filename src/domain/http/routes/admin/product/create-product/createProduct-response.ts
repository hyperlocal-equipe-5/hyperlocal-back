/**
 * type post
 * with bearer authorization header
 * /admin/product/create-product
 */

import { Product } from 'src/domain/entities/product';
import { HttpResponse } from 'src/domain/http/httpResponse';

export type CreateProductResponse = HttpResponse<Product>;
