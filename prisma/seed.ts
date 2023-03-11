import { DatabaseSeed } from './seed/database-seed';

/**
 * Seed para geracao dos primeiros dados para o banco de dados
 */

/**
 * Dados do usuario
 */
const user = {
  name: 'Admin',
  email: 'admin@admin.com',
  password: '1234567',
  image: '',
  cellphone: 0,
};

/**
 * Dados do restaurante
 */
const restaurant = {
  telephone: 0,
  email: '',
  name: 'Main Restaurant',
  address: '',
  logo: '',
  colorScheme: 1,
};

async function main() {
  return await DatabaseSeed(restaurant, user).seed();
}

main();
