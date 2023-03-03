/**
 * type get
 * with bearer authorization header
 * /admin/user/get-all-users?restaurant=8u93u8z3
 */

import { User } from 'src/domain/entities/user';

export type GetAllUsersAdminResponse = HttpResponse<User[]>;
