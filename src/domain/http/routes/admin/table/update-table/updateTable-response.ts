/**
 * type patch
 * with bearer authorization header
 * /admin/table/update-table
 */

import { Table } from 'src/domain/entities/table';
import { HttpResponse } from 'src/domain/http/response';

export type UpdateTableAdminResponse = HttpResponse<Table>;
