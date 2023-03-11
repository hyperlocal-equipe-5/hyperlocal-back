import { PrismaClient } from '@prisma/client';

export const prismaDatabase = new PrismaClient({
  log: ['error', 'info', 'query', 'warn'],
});
