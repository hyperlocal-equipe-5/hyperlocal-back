/**
 * type post
 * with bearer authorization header
 * /admin/user/create-user
 */

type CreateUserRequestBody = {
  name: string;
  email: string;
  password: string;
  image?: string;
  cellphone?: number;
  role: Role;
  restaurant: Restaurant;
};
