/**
 * type get
 * /product/get-all?restaurant=4rx234r
 */

import { Product } from 'src/domain/entities/product';
import { HttpResponse } from 'src/domain/http/httpResponse';

export type GetAllProductsResponse = HttpResponse<Product[]>;
