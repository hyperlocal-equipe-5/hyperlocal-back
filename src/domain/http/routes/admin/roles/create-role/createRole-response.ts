/**
 * type post
 * with bearer authorization header
 * /admin/role/create-role
 */

import { Role } from 'src/domain/entities/role';
import { HttpResponse } from 'src/domain/http/response';

export type CreateRoleResponse = HttpResponse<Role>;
