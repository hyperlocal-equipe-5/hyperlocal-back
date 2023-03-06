/**
 * type delete
 * with bearer authorization header
 * /admin/order/delete-order?id=23r32rfg&restaurant=859f83u
 */

import { Order } from 'src/domain/entities/order';
import { HttpResponse } from 'src/domain/http/response';

export type DeleteOrderAdminResponse = HttpResponse<Order>;
