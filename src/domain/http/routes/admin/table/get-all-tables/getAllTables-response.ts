/**
 * type get
 * with bearer authorization header
 * /admin/table/get-all-tables?restaurant=8u93u8z3
 */

import { Table } from 'src/domain/entities/table';

export type GetAllTableAdminResponse = HttpResponse<Table[]>;
