/**
 * type patch
 * with bearer authorization header
 * /admin/user/update-user?id=328nr283r7&restaurant=8u93u8z3
 */

import { User } from 'src/domain/entities/user';
import { HttpResponse } from 'src/domain/http/response';

export type UpdateUserAdminResponse = HttpResponse<User>;
