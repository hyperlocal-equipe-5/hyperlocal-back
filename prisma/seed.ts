import { DatabaseSeed } from './seed/database-seed';

/**
 * Seed for the first database data creation
 *
 * Data to be created:
 * - First restaurant,
 * - First admin role,
 * - First customer role,
 * - First admin user,
 */

/**
 * First admin user data
 */
const user = {
  name: 'Admin',
  email: 'admin@admin.com',
  password: '1234567',
  image: '',
  cellphone: 0,
};

/**
 * First restaurant data
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
