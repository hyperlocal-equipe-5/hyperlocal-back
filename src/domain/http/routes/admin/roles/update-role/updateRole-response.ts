/**
 * type patch
 * with bearer authorization header
 * /admin/role/update-role?id=328nr283r7&restaurant=8u93u8z3
 */

import { Role } from 'src/domain/entities/role';

export type UpdateRoleAdminResponse = HttpResponse<Role>;
