/**
 * type get
 * with bearer authorization header
 * /admin/order/get-all-orders?restaurant=8u93u8z3
 */

import { Order } from 'src/domain/entities/order';

export type GetAllOrderAdminResponse = HttpResponse<Order[]>;
