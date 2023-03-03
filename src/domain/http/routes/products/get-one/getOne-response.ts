/**
 * type get
 * /products/get-one?id=d387462384&restaurant=4rx234r
 */

import { Product } from 'src/domain/entities/product';

export type GetOneProductResponse = HttpResponse<Product>;
