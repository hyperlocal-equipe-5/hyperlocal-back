/**
 * type patch
 * with bearer authorization header
 * /admin/table/update-table?id=328nr283r7&restaurant=8u93u8z3
 */

import { Table } from 'src/domain/entities/table';
import { HttpResponse } from 'src/domain/http/response';

export type UpdateTableAdminResponse = HttpResponse<Table>;
