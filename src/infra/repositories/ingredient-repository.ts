import { Ingredient } from "src/domain/entities/ingredient";
import { IngredientType } from "src/domain/types/ingredint-type";
import { IngredientRepositoryInterface } from "../abstract/repositories/ingredientRepository.interface";

export class IngredientRepository implements IngredientRepositoryInterface{
  public create(ingredientBody: IngredientType): Promise<Ingredient> {
    throw new Error("Method not implemented.");
  }
  public delete(ingredientId: string, restaurantId: string): Promise<Ingredient> {
    throw new Error("Method not implemented.");
  }
  public getOne(ingredientId: string, restaurantId: string): Promise<Ingredient> {
    throw new Error("Method not implemented.");
  }
  public getAll(ingredientId: string): Promise<Ingredient[]> {
    throw new Error("Method not implemented.");
  }
  public update(ingredientBody: IngredientType): Promise<Ingredient> {
    throw new Error("Method not implemented.");
  }
}
