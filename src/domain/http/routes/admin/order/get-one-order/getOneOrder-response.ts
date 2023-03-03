/**
 * type get
 * with bearer authorization header
 * /admin/order/get-one-order?id=iuedy8723y283&restaurant=8u93u8z3
 */

import { Order } from 'src/domain/entities/order';

export type GetOneOrderAdminResponse = HttpResponse<Order>;
