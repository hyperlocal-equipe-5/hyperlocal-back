import { CreateIngredientDto } from 'src/domain/dto/ingredient/createIngredient-dto';
import { UpdateIngredientDto } from 'src/domain/dto/ingredient/updateIngredient-dto';
import { Ingredient } from 'src/domain/entities/ingredient';
import { IngredientEntityInterface } from './abstract/ingredientEntity-interface';

export class IngredientEntity implements IngredientEntityInterface {
  constructor(
    private readonly ingredientDto: CreateIngredientDto | UpdateIngredientDto,
  ) {}

  validate(): void {
    throw new Error('Method not implemented.');
  }

  getBody(): Ingredient {
    throw new Error('Method not implemented.');
  }

  updateBody(mainIngredient: Ingredient): Ingredient {
    throw new Error('Method not implemented.');
  }
}
