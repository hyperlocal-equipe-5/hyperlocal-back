import { Ingredient } from 'src/domain/entities/ingredient';
import { IngredientType } from 'src/domain/types/ingredint-type';
import { IngredientRepositoryInterface } from '../abstract/repositories/ingredientRepository.interface';
import { prismaDatabase } from '../database/prisma-database';

export class IngredientRepository implements IngredientRepositoryInterface {
  public async create(ingredientBody: IngredientType): Promise<any> {
    return await prismaDatabase.ingredient.create({
      data: {
        ...ingredientBody,
        restaurant: { connect: { id: ingredientBody.restaurant } },
      },
      include: { restaurant: true },
    });
  }

  public async delete(
    ingredientId: string,
    restaurantId: string,
  ): Promise<Ingredient> {
    return await prismaDatabase.ingredient.delete({
      where: { id: ingredientId },
      include: { restaurant: true },
    });
  }

  public async getOne(
    ingredientId: string,
    restaurantId: string,
  ): Promise<Ingredient> {
    return await prismaDatabase.ingredient.findUnique({
      where: { id: ingredientId },
      include: { restaurant: true },
    });
  }

  public async getAll(restaurantId: string): Promise<Ingredient[]> {
    return await prismaDatabase.ingredient.findMany({
      where: { restaurantId: restaurantId },
      include: { restaurant: true },
    });
  }

  public async update(ingredientBody: IngredientType): Promise<Ingredient> {
    return await prismaDatabase.ingredient.update({
      where: { id: ingredientBody.id },
      data: {
        ...ingredientBody,
        restaurant: { connect: { id: ingredientBody.restaurant } },
      },
      include: { restaurant: true },
    });
  }
}
