import { CreateRestaurantDto } from 'src/domain/dto/restaurant/createRestaurant-dto';
import { UpdateRestaurantDto } from 'src/domain/dto/restaurant/updateRestaurant-dto';
import { Restaurant } from 'src/domain/entities/restaurant';
import { IdGeneratorAdapterInterface } from 'src/utils/abstract/adapters/idGeneratorAdapter-interface';
import { MissingParamError } from 'src/utils/errors/missingParam-error';
import { RestaurantEntityInterface } from './abstract/interfaces/restaurantEntity-interface';
import { RestaurantType } from '../domain/types/restaurant-type';
import { Entity } from './entity';
import { InvalidParamError } from 'src/utils/errors/invalidParam-error';
import { GetRestaurantReferenceNumberUseCaseInterface } from 'src/data/abstract/usecases/restaurant/getRestaurantReferenceNumberUseCase-interface';

export class RestaurantEntity
  extends Entity
  implements RestaurantEntityInterface
{
  private restaurantDto: CreateRestaurantDto | UpdateRestaurantDto;
  private readonly idGeneratorAdapter: IdGeneratorAdapterInterface;
  private readonly getRestaurantReferenceNumber: GetRestaurantReferenceNumberUseCaseInterface;

  public constructor(
    idGeneratorAdapter: IdGeneratorAdapterInterface,
    getRestaurantReferenceNumber: GetRestaurantReferenceNumberUseCaseInterface,
  ) {
    super();
    this.idGeneratorAdapter = idGeneratorAdapter;
    this.getRestaurantReferenceNumber = getRestaurantReferenceNumber;
  }

  public setData(
    restaurantDto: CreateRestaurantDto | UpdateRestaurantDto,
  ): void {
    this.restaurantDto = restaurantDto;
  }

  public validate(): void {
    if (!this.restaurantDto.name) {
      throw new MissingParamError('name');
    }

    if (
      this.restaurantDto.telephone &&
      typeof this.restaurantDto.telephone !== 'number'
    ) {
      throw new InvalidParamError('Telephone must be of type number.');
    }

    if (
      this.restaurantDto.email &&
      !this.emailValidator(this.restaurantDto.email).result
    ) {
      throw new InvalidParamError(
        this.emailValidator(this.restaurantDto.email).message,
      );
    }
  }

  public async getBody(): Promise<RestaurantType> {
    const referenceNumber = await this.getRestaurantReferenceNumber.execute();

    return {
      id: this.idGeneratorAdapter.generateId(),
      reference: referenceNumber,
      name: this.restaurantDto.name ?? '',
      telephone: this.restaurantDto.telephone ?? 0,
      email: this.restaurantDto.email ?? '',
      address: this.restaurantDto.address ?? '',
      logo: this.restaurantDto.logo ?? '',
      colorScheme: this.restaurantDto.colorScheme ?? 0,
      createdAt: this.getDate(),
      updatedAt: this.getDate(),
    };
  }

  public updateBody(mainRestaurant: Restaurant): RestaurantType {
    return {
      id: mainRestaurant.id,
      reference: mainRestaurant.reference,
      name: this.restaurantDto.name ?? mainRestaurant.name,
      telephone: this.restaurantDto.telephone ?? mainRestaurant.telephone,
      email: this.restaurantDto.email ?? mainRestaurant.email,
      address: this.restaurantDto.address ?? mainRestaurant.address,
      logo: this.restaurantDto.logo ?? mainRestaurant.logo,
      colorScheme: this.restaurantDto.colorScheme ?? mainRestaurant.colorScheme,
      createdAt: mainRestaurant.createdAt,
      updatedAt: this.getDate(),
    };
  }
}
