export type UpdateUserDto = {
  id: string;
  restaurant: string;
  name?: string;
  email?: string;
  password?: string;
  image?: string;
  cellphone?: number;
  role?: string;
};
