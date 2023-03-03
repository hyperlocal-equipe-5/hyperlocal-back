export type CreateUserDto = {
  name: string;
  email: string;
  password: string;
  image?: string;
  cellphone?: number;
  role: string;
  restaurant: string;
};
