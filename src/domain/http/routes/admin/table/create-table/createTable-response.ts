/**
 * type post
 * with bearer authorization header
 * /admin/table/create-table
 */

import { Table } from 'src/domain/entities/table';

export type CreateTableResponse = HttpResponse<Table>;
