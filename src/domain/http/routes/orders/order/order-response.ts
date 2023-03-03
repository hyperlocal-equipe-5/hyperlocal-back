/**
 * type post
 * /orders/order
 */

import { Order } from 'src/domain/entities/order';

export type PostOrderResponse = HttpResponse<Order>;
