/**
 * type delete
 * with bearer authorization header
 * /admin/table/delete-table?id=23r32rfg&restaurant=859f83u
 */

import { Table } from 'src/domain/entities/table';

export type DeleteTableAdminResponse = HttpResponse<Table>;
