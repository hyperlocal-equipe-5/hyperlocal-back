/**
 * type delete
 * with bearer authorization header
 * /admin/product/delete-product?id=23r32rfg&restaurant=859f83u
 */

import { Product } from 'src/domain/entities/product';

export type DeleteProductAdminResponse = HttpResponse<Product>;
