import { UpdateIngredientUseCaseInterface } from 'src/data/abstract/usecases/ingredient/updateIngredientUseCase-interface';
import { UpdateIngredientDto } from 'src/domain/dto/ingredient/updateIngredient-dto';
import { Ingredient } from 'src/domain/entities/ingredient';
import { IngredientEntityInterface } from 'src/entities/abstract/interfaces/ingredientEntity-interface';
import { IngredientRepositoryInterface } from 'src/infra/abstract/repositories/ingredientRepository.interface';

export class UpdateIngredientUseCase
  implements UpdateIngredientUseCaseInterface
{
  private readonly entity: IngredientEntityInterface;
  private readonly repository: IngredientRepositoryInterface;

  public constructor(
    entity: IngredientEntityInterface,
    repository: IngredientRepositoryInterface,
  ) {
    this.entity = entity;
    this.repository = repository;
  }

  public async execute(
    updateIngredientDto: UpdateIngredientDto,
  ): Promise<Ingredient> {
    this.entity.setData(updateIngredientDto);

    const { id, restaurant } = updateIngredientDto;
    const fountEntity = await this.repository.getOne(id, restaurant);
    const body = this.entity.updateBody(fountEntity);
    const response = await this.repository.update(body);

    return response;
  }
}
