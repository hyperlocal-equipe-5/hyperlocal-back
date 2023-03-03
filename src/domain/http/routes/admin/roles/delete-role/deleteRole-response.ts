/**
 * type delete
 * with bearer authorization header
 * /admin/role/delete-role?id=23r32rfg&restaurant=859f83u
 */

import { Role } from 'src/domain/entities/role';
import { HttpResponse } from 'src/domain/http/response';

export type DeleteRoleAdminResponse = HttpResponse<Role>;
