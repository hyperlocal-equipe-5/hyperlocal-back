import { CreateOrderDto } from 'src/domain/dto/order/createOrder-dto';
import { UpdateOrderDto } from 'src/domain/dto/order/updateOrder-dto';
import { Order } from 'src/domain/entities/order';
import { IdGeneratorAdapterInterface } from 'src/utils/abstract/adapters/idGeneratorAdapter-interface';
import { MissingParamError } from 'src/utils/errors/missingParam-error';
import { OrderEntityInterface } from './abstract/interfaces/orderEntity-interface';
import { OrderType } from '../domain/types/order-type';
import { Entity } from './entity';
import { InvalidParamError } from 'src/utils/errors/invalidParam-error';
import { OrderPriceCalculatorUseCaseInterface } from 'src/data/abstract/usecases/order/orderPriceCalculatorUseCase-interface';

export class OrderEntity extends Entity implements OrderEntityInterface {
  private orderDto: CreateOrderDto | UpdateOrderDto;
  private readonly idGeneratorAdapter: IdGeneratorAdapterInterface;
  private readonly orderPriceCalculator: OrderPriceCalculatorUseCaseInterface;

  public constructor(
    idGeneratorAdapter: IdGeneratorAdapterInterface,
    orderPriceCalculator: OrderPriceCalculatorUseCaseInterface,
  ) {
    super();
    this.idGeneratorAdapter = idGeneratorAdapter;
    this.orderPriceCalculator = orderPriceCalculator;
  }

  public setData(orderDto: CreateOrderDto | UpdateOrderDto): void {
    this.orderDto = orderDto;
  }

  public validate(): void {
    if (!this.orderDto.products) {
      throw new MissingParamError('products');
    }

    if (this.orderDto.products.length !== this.orderDto.products.length) {
      throw new InvalidParamError('products / quantities');
    }

    if (!this.orderDto.restaurant) {
      throw new MissingParamError('restaurant');
    }
  }

  public async getBody(): Promise<OrderType> {
    const price = await this.orderPriceCalculator.execute(this.orderDto);

    return {
      id: this.idGeneratorAdapter.generateId(),
      restaurant: this.orderDto.restaurant,
      products:
        this.orderDto.products.map((item) => ({
          id: this.idGeneratorAdapter.generateId(),
          product: item.product,
          ingredientsAdded: item.ingredientsAdded.map((ingredient) => ({
            id: this.idGeneratorAdapter.generateId(),
            ...ingredient,
          })),
          ingredientsRemoved: item.ingredientsAdded.map((ingredient) => ({
            id: this.idGeneratorAdapter.generateId(),
            ...ingredient,
          })),
        })) ?? [],
      finished: this.orderDto.finished,
      price,
      takeAway: this.orderDto.takeAway ?? false,
      orderNumber: this.orderNumberGenerator(),
      customerName: this.orderDto.customerName ?? '',
      user: this.orderDto.user ?? '',
      table: this.orderDto.table ?? '',
      createdAt: this.getDate(),
      updatedAt: this.getDate(),
    };
  }

  public async updateBody(mainOrder: Order): Promise<OrderType> {
    const price = this.orderDto.products
      ? await this.orderPriceCalculator.execute(this.orderDto)
      : mainOrder.price;

    return {
      id: mainOrder.id,
      products:
        this.orderDto.products.map((item) => ({
          id: this.idGeneratorAdapter.generateId(),
          product: item.product,
          ingredientsAdded: item.ingredientsAdded.map((ingredient) => ({
            id: this.idGeneratorAdapter.generateId(),
            ...ingredient,
          })),
          ingredientsRemoved: item.ingredientsAdded.map((ingredient) => ({
            id: this.idGeneratorAdapter.generateId(),
            ...ingredient,
          })),
        })) ??
        mainOrder.products.map((item) => ({
          id: item.id,
          product: item.product.id,
          ingredientsAdded: item.ingredientsAdded.map((ingredient) => ({
            id: ingredient.id,
            ingredient: ingredient.ingredient.id,
            quantity: ingredient.quantity,
          })),
          ingredientsRemoved: item.ingredientsAdded.map((ingredient) => ({
            id: ingredient.id,
            ingredient: ingredient.ingredient.id,
            quantity: ingredient.quantity,
          })),
        })),
      finished: this.orderDto.finished,
      price,
      restaurant: mainOrder.restaurant.id,
      takeAway: this.orderDto.takeAway ?? mainOrder.takeAway,
      orderNumber: mainOrder.orderNumber,
      customerName: this.orderDto.customerName ?? mainOrder.customerName,
      user: this.orderDto.user
        ? this.orderDto.user
        : mainOrder.user
        ? mainOrder.user.id
        : '',
      table: this.orderDto.table
        ? this.orderDto.table
        : mainOrder.table
        ? mainOrder.table.id
        : '',
      createdAt: mainOrder.createdAt,
      updatedAt: this.getDate(),
    };
  }

  private orderNumberGenerator(): number {
    const orderTime = new Date();

    const startOfTheDay = new Date(
      orderTime.getFullYear(),
      orderTime.getMonth(),
      orderTime.getDate(),
    );

    const orderNumber = (orderTime.getTime() - startOfTheDay.getTime()) / 1000;

    return orderNumber;
  }
}
