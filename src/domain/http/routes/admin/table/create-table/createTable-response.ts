/**
 * type post
 * with bearer authorization header
 * /admin/table/create-table
 */

import { Table } from 'src/domain/entities/table';
import { HttpResponse } from 'src/domain/http/response';

export type CreateTableResponse = HttpResponse<Table>;
