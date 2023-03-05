import { CreateIngredientUseCaseInterface } from 'src/data/abstract/usecases/ingredient/createIngredientUseCase-interface';
import { CreateIngredientDto } from 'src/domain/dto/ingredient/createIngredient-dto';
import { Ingredient } from 'src/domain/entities/ingredient';
import { IngredientEntityInterface } from 'src/entities/abstract/interfaces/ingredientEntity-interface';
import { IngredientRepositoryInterface } from 'src/infra/abstract/repositories/ingredientRepository.interface';

export class CreateIngredientUseCase
  implements CreateIngredientUseCaseInterface
{
  private readonly entity: IngredientEntityInterface;
  private readonly repository: IngredientRepositoryInterface;

  public async execute(
    createIngredientDto: CreateIngredientDto,
  ): Promise<Ingredient> {
    this.entity.setData(createIngredientDto);

    const body = this.entity.getBody();
    const response = await this.repository.create(body);

    return response;
  }
}
