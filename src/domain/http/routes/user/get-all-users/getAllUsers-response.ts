/**
 * type get
 * with bearer authorization header
 * /user/get-all-users?restaurant=8u93u8z3
 */

import { User } from 'src/domain/entities/user';
import { HttpResponse } from 'src/domain/http/response';

export type GetAllUsersAdminResponse = HttpResponse<User[]>;
