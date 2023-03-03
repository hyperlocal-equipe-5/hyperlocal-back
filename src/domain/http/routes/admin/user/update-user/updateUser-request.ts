/**
 * type patch
 * with bearer authorization header
 * /admin/user/update-user?id=328nr283r7&restaurant=8u93u8z3
 */

export type UpdateUserAdminRequestBody = {
  name?: string;
  email?: string;
  password?: string;
  image?: string;
  cellphone?: number;
  role?: string;
};
