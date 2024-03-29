/**
 * type delete
 * with bearer authorization header
 * /admin/user/delete-user?id=23r32rfg&restaurant=859f83u
 */

import { User } from 'src/domain/entities/user';
import { HttpResponse } from 'src/domain/http/httpResponse';

export type DeleteUserAdminResponse = HttpResponse<User>;
