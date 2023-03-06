/**
 * type get
 * with bearer authorization header
 * /admin/user/get-one-user?id=iuedy8723y283&restaurant=8u93u8z3
 */

import { User } from 'src/domain/entities/user';
import { HttpResponse } from 'src/domain/http/response';

export type GetOneUserAdminResponse = HttpResponse<User>;
