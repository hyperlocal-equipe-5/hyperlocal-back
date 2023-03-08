/**
 * type patch
 * with bearer authorization header
 * /admin/product/update-product
 */

import { Product } from 'src/domain/entities/product';
import { HttpResponse } from 'src/domain/http/httpResponse';

export type UpdateProductAdminResponse = HttpResponse<Product>;
