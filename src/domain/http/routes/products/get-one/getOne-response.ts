/**
 * type get
 * /product/get-one?id=d387462384&restaurant=4rx234r
 */

import { Product } from 'src/domain/entities/product';
import { HttpResponse } from 'src/domain/http/httpResponse';

export type GetOneProductResponse = HttpResponse<Product>;
