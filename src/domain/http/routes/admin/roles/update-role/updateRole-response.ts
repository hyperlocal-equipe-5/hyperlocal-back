/**
 * type patch
 * with bearer authorization header
 * /admin/role/update-role
 */

import { Role } from 'src/domain/entities/role';
import { HttpResponse } from 'src/domain/http/response';

export type UpdateRoleAdminResponse = HttpResponse<Role>;
