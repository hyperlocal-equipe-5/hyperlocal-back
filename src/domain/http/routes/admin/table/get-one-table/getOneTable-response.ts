/**
 * type get
 * with bearer authorization header
 * /admin/table/get-one-table?id=iuedy8723y283&restaurant=8u93u8z3
 */

import { Table } from 'src/domain/entities/table';

export type GetOneTableAdminResponse = HttpResponse<Table>;
