import { PrismaClient, Restaurant, User } from '@prisma/client';
import { Role } from '../../src/domain/entities/role';
import { RestaurantType } from '../../src/domain/types/restaurant-type';
import { RoleType } from '../../src/domain/types/role-type';
import { UserType } from '../../src/domain/types/user-type';
import { HasherAdapterInterface } from '../../src/utils/adapters/abstract/hasherAdapter-interface';
import { IdGeneratorAdapterInterface } from '../../src/utils/adapters/abstract/idGeneratorAdapter-interface';
import { HasherAdapter } from '../../src/utils/adapters/hasher-adapter';
import { IdGeneratorAdapter } from '../../src/utils/adapters/idGenerator-adapter';

type UserSeed = {
  name: string;
  email: string;
  password: string;
  image: string;
  cellphone: number;
};

type RestaurantSeed = {
  telephone: number;
  email: string;
  name: string;
  address: string;
  logo: string;
  colorScheme: number;
};

class Seeder {
  private prismaDatabase: PrismaClient;
  private hasher: HasherAdapterInterface;
  private idGenerator: IdGeneratorAdapterInterface;
  private adminRestaurant: RestaurantType;
  private adminRole: RoleType;
  private customerRole: RoleType;
  private adminUser: UserType;

  public constructor(
    prismaDatabase: PrismaClient,
    hasherAdapter: HasherAdapterInterface,
    idGeneratorAdapter: IdGeneratorAdapterInterface,
    restaurant: RestaurantSeed,
    user: UserSeed,
  ) {
    this.prismaDatabase = prismaDatabase;
    this.hasher = hasherAdapter;
    this.idGenerator = idGeneratorAdapter;

    const generatedId = this.idGenerator.generateId();
    const customerRoleId = this.idGenerator.generateId();

    this.adminRestaurant = {
      id: generatedId,
      telephone: restaurant.telephone,
      email: restaurant.email,
      name: restaurant.name,
      address: restaurant.address,
      logo: restaurant.logo,
      colorScheme: restaurant.colorScheme,
      createdAt: this.getDate(),
      updatedAt: this.getDate(),
    };

    this.adminRole = {
      id: generatedId,
      name: 'ADMIN',
      restaurant: generatedId,
      access: {
        id: generatedId,
        createRestaurants: true,
        createUsers: true,
        createProducts: true,
        createCategories: true,
        createIngredients: true,
        createOrders: true,
        createRoles: true,
        createTables: true,
        readRestaurants: true,
        readUsers: true,
        readProducts: true,
        readCategories: true,
        readIngredients: true,
        readOrders: true,
        readRoles: true,
        readTables: true,
        updateRestaurants: true,
        updateUsers: true,
        updateProducts: true,
        updateCategories: true,
        updateIngredients: true,
        updateOrders: true,
        updateRoles: true,
        updateTables: true,
        deleteRestaurants: true,
        deleteUsers: true,
        deleteProducts: true,
        deleteCategories: true,
        deleteIngredients: true,
        deleteOrders: true,
        deleteRoles: true,
        deleteTables: true,
        defineAccess: true,
      },
      createdAt: this.getDate(),
      updatedAt: this.getDate(),
    };

    this.customerRole = {
      id: customerRoleId,
      name: 'CUSTOMER',
      restaurant: generatedId,
      access: {
        id: customerRoleId,
        createRestaurants: false,
        createUsers: false,
        createProducts: false,
        createCategories: false,
        createIngredients: false,
        createOrders: false,
        createRoles: false,
        createTables: false,
        readRestaurants: true,
        readUsers: false,
        readProducts: true,
        readCategories: true,
        readIngredients: true,
        readOrders: false,
        readRoles: false,
        readTables: true,
        updateRestaurants: false,
        updateUsers: false,
        updateProducts: false,
        updateCategories: false,
        updateIngredients: false,
        updateOrders: false,
        updateRoles: false,
        updateTables: false,
        deleteRestaurants: false,
        deleteUsers: false,
        deleteProducts: false,
        deleteCategories: false,
        deleteIngredients: false,
        deleteOrders: false,
        deleteRoles: false,
        deleteTables: false,
        defineAccess: false,
      },
      createdAt: this.getDate(),
      updatedAt: this.getDate(),
    };

    this.adminUser = {
      id: generatedId,
      name: user.name,
      email: user.email,
      password: this.hasher.hash(user.password, 10),
      image: user.image,
      cellphone: 0,
      role: generatedId,
      restaurant: generatedId,
      createdAt: this.getDate(),
      updatedAt: this.getDate(),
    };
  }

  public async seed() {
    try {
      const execution = await this.createAdminRestaurant().then(() => {
        this.createAdminRole().then(() => {
          this.createcustomerRole().then(() => {
            this.createAdminUser().then(() => {
              this.disconnect();
            });
          });
        });
      });

      return execution;
    } catch (error) {
      console.log(error);
    }
  }

  private async createAdminRestaurant(): Promise<Restaurant> {
    return await this.prismaDatabase.restaurant.create({
      data: this.adminRestaurant,
    });
  }

  private async createAdminRole(): Promise<Role> {
    const createdAccess = await this.prismaDatabase.access.create({
      data: this.adminRole.access,
    });

    return await this.prismaDatabase.role.create({
      data: {
        ...this.adminRole,
        restaurant: { connect: { id: this.adminRole.id } },
        access: { connect: { id: createdAccess.id } },
      },
      include: { restaurant: true, access: true },
    });
  }

  private async createcustomerRole(): Promise<Role> {
    const createdAccess = await this.prismaDatabase.access.create({
      data: this.customerRole.access,
    });

    return await this.prismaDatabase.role.create({
      data: {
        ...this.customerRole,
        restaurant: { connect: { id: this.customerRole.id } },
        access: { connect: { id: createdAccess.id } },
      },
      include: { restaurant: true, access: true },
    });
  }

  private async createAdminUser(): Promise<User> {
    return await this.prismaDatabase.user.create({
      data: {
        ...this.adminUser,
        restaurant: { connect: { id: this.adminUser.restaurant } },
        role: { connect: { id: this.adminUser.role } },
      },
      include: {
        role: { include: { restaurant: true, access: true } },
        restaurant: true,
      },
    });
  }

  private disconnect(): void {
    this.prismaDatabase.$disconnect();
  }

  protected getDate(): string {
    const todayDate = new Date().toISOString().split('T')[0];

    return todayDate;
  }
}

export function DatabaseSeed(
  restaurantSeed: RestaurantSeed,
  userSeed: UserSeed,
): Seeder {
  const prismaDatabase = new PrismaClient();
  const hasherAdapter = new HasherAdapter();
  const idGeneratorAdapter = new IdGeneratorAdapter();

  return new Seeder(
    prismaDatabase,
    hasherAdapter,
    idGeneratorAdapter,
    restaurantSeed,
    userSeed,
  );
}
