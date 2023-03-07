/**
 * type get
 * with bearer authorization header
 * /admin/role/get-all-roles?restaurant=8u93u8z3
 */

import { Role } from 'src/domain/entities/role';
import { HttpResponse } from 'src/domain/http/httpResponse';

export type GetAllRolesAdminResponse = HttpResponse<Role[]>;
