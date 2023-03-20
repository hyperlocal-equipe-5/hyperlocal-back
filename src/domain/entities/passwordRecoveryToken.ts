import { User } from '@prisma/client';

export type PasswordRecovery = {
  token: string;
  user: User;
};
