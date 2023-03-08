/**
 * type post
 * /orders/order
 */

import { Order } from 'src/domain/entities/order';
import { HttpResponse } from 'src/domain/http/httpResponse';

export type PostOrderResponse = HttpResponse<Order>;
