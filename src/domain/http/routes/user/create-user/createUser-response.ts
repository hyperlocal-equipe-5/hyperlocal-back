/**
 * type post
 * with bearer authorization header
 * /user/create-user
 */

import { User } from 'src/domain/entities/user';
import { HttpResponse } from 'src/domain/http/httpResponse';

export type CreateUserResponse = HttpResponse<User>;
