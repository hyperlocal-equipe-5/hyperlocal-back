/**
 * type get
 * with bearer authorization header
 * /admin/role/get-one-role?id=iuedy8723y283&restaurant=8u93u8z3
 */

import { Role } from 'src/domain/entities/role';

export type GetOneRoleAdminResponse = HttpResponse<Role>;
