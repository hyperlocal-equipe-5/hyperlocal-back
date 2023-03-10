export type UpdateUserDto = {
  userId: string;
  restaurant: string;
  name?: string;
  email?: string;
  password?: string;
  image?: string;
  cellphone?: number;
  role?: string;
};
