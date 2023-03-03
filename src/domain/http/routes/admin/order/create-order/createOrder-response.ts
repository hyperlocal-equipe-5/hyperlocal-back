/**
 * type post
 * with bearer authorization header
 * /admin/order/create-order
 */

import { Order } from 'src/domain/entities/order';

export type CreateOrderResponse = HttpResponse<Order>;
