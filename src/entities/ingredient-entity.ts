import { CreateIngredientDto } from 'src/domain/dto/ingredient/createIngredient-dto';
import { UpdateIngredientDto } from 'src/domain/dto/ingredient/updateIngredient-dto';
import { Ingredient } from 'src/domain/entities/ingredient';
import { IdGeneratorAdapterInterface } from 'src/utils/adapters/abstract/idGeneratorAdapter-interface';
import { IngredientEntityInterface } from './abstract/interfaces/ingredientEntity-interface';
import { IngredientType } from './abstract/types/ingredint-type';
import { Entity } from './entity';

export class IngredientEntity
  extends Entity
  implements IngredientEntityInterface
{
  private readonly ingredientDto: CreateIngredientDto | UpdateIngredientDto;
  private readonly idGeneratorAdapter: IdGeneratorAdapterInterface;

  public constructor(
    ingredientDto: CreateIngredientDto | UpdateIngredientDto,
    idGeneratorAdapter: IdGeneratorAdapterInterface,
  ) {
    super();
    this.ingredientDto = ingredientDto;
    this.idGeneratorAdapter = idGeneratorAdapter;
  }

  public validate(): void {
    throw new Error('Method not implemented.');
  }

  public getBody(): IngredientType {
    return {
      id: this.idGeneratorAdapter.generateId(),
      name: this.ingredientDto.name ?? '',
      price: this.ingredientDto.price ?? 0,
      image: this.ingredientDto.image ?? '',
      quantity: this.ingredientDto.quantity ?? 0,
      restaurant: this.ingredientDto.restaurant,
      createdOn: this.getDate(),
      updatedOn: this.getDate(),
    };
  }

  public updateBody(mainIngredient: Ingredient): IngredientType {
    return {
      id: mainIngredient.id,
      name: this.ingredientDto.name ?? mainIngredient.name,
      price: this.ingredientDto.price ?? mainIngredient.price,
      image: this.ingredientDto.image ?? mainIngredient.image,
      quantity: this.ingredientDto.quantity ?? mainIngredient.quantity,
      restaurant: this.ingredientDto.restaurant,
      createdOn: mainIngredient.createdOn,
      updatedOn: this.getDate(),
    };
  }
}
