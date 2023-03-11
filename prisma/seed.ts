import { PrismaClient } from '@prisma/client';
import { DatabaseSeed } from './seed/database-seed';

const prismaDatabase = new PrismaClient();

async function main() {
  return await DatabaseSeed().seed();
}

main();
