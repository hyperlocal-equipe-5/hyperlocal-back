/**
 * type patch
 * with bearer authorization header
 * /user/update-user
 */

import { User } from 'src/domain/entities/user';
import { HttpResponse } from 'src/domain/http/response';

export type UpdateUserAdminResponse = HttpResponse<User>;
