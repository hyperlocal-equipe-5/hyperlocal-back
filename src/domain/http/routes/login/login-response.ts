/**
 * type post
 * /login
 */

import { LoggedType } from 'src/domain/types/logged-type';
import { HttpResponse } from '../../httpResponse';

export type LoginResponse = HttpResponse<LoggedType>;
