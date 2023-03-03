/**
 * type post
 * with bearer authorization header
 * /admin/user/create-user
 */

import { User } from 'src/domain/entities/user';

export type CreateUserResponse = HttpResponse<User>;
