/**
 * type post
 * with bearer authorization header
 * /admin/user/create-user
 */

import { CreateUserDto } from 'src/domain/dto/user/createUser-dto';

export type CreateUserAdminRequestBody = CreateUserDto;
