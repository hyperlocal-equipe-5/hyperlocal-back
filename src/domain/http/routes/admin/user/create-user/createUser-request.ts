/**
 * type post
 * with bearer authorization header
 * /admin/user/create-user
 */

export type CreateUserRequestBody = {
  name: string;
  email: string;
  password: string;
  image?: string;
  cellphone?: number;
  roled: string;
  restaurant: string;
};
