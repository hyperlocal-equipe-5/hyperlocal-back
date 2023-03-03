/**
 * type post
 * /orders/order
 */

import { Order } from 'src/domain/entities/order';
import { HttpResponse } from 'src/domain/http/response';

export type PostOrderResponse = HttpResponse<Order>;
