/**
 * type post
 * with bearer authorization header
 * /admin/order/create-order
 */

import { Order } from 'src/domain/entities/order';
import { HttpResponse } from 'src/domain/http/response';

export type CreateOrderResponse = HttpResponse<Order>;
