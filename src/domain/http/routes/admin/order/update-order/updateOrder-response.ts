/**
 * type patch
 * with bearer authorization header
 * /admin/order/update-order
 */

import { Order } from 'src/domain/entities/order';
import { HttpResponse } from 'src/domain/http/response';

export type UpdateOrderAdminResponse = HttpResponse<Order>;
