/**
 * type post
 * with bearer authorization header
 * /admin/user/create-user
 */

import { User } from 'src/domain/entities/user';
import { HttpResponse } from 'src/domain/http/httpResponse';

export type CreateUserAdminResponse = HttpResponse<User>;
