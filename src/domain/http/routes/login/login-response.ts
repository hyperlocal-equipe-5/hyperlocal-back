/**
 * type post
 * /login
 */

import { LoggedType } from 'src/domain/types/logged-type';
import { HttpResponse } from '../../response';

export type LoginResponse = HttpResponse<LoggedType>;
