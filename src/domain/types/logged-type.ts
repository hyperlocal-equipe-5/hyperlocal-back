import { User } from '../entities/user';

export type LoggedType = {
  token: string;
  user: User;
};
