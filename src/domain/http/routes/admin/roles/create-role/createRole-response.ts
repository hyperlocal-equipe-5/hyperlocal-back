/**
 * type post
 * with bearer authorization header
 * /admin/role/create-role
 */

import { Role } from 'src/domain/entities/role';

export type CreateRoleResponse = HttpResponse<Role>;
