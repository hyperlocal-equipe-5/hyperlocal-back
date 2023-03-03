/**
 * type patch
 * with bearer authorization header
 * /admin/order/update-order?id=328nr283r7&restaurant=4334f23d32
 */

import { Order } from 'src/domain/entities/order';
import { HttpResponse } from 'src/domain/http/response';

export type UpdateOrderAdminResponse = HttpResponse<Order>;
