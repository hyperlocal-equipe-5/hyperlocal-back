import { CreateOrderDto } from 'src/domain/dto/order/createOrder-dto';
import { UpdateOrderDto } from 'src/domain/dto/order/updateOrder-dto';
import { Order } from 'src/domain/entities/order';
import { IdGeneratorAdapterInterface } from 'src/utils/adapters/abstract/idGeneratorAdapter-interface';
import { MissingParamError } from 'src/utils/errors/missingParam-error';
import { OrderEntityInterface } from './abstract/interfaces/orderEntity-interface';
import { OrderType } from '../domain/types/order-type';
import { Entity } from './entity';

export class OrderEntity extends Entity implements OrderEntityInterface {
  private orderDto: CreateOrderDto | UpdateOrderDto;
  private readonly idGeneratorAdapter: IdGeneratorAdapterInterface;

  public constructor(idGeneratorAdapter: IdGeneratorAdapterInterface) {
    super();
    this.idGeneratorAdapter = idGeneratorAdapter;
  }

  public setData(orderDto: CreateOrderDto | UpdateOrderDto): void {
    this.orderDto = orderDto;
  }

  public validate(): void {
    if (!this.orderDto.products) {
      throw new MissingParamError('products');
    }

    if (!this.orderDto.restaurant) {
      throw new MissingParamError('restaurant');
    }
  }

  public getBody(): OrderType {
    return {
      id: this.idGeneratorAdapter.generateId(),
      restaurant: this.orderDto.restaurant,
      products: this.orderDto.products ?? [],
      takeAway: this.orderDto.takeAway ?? false,
      orderNumber: this.orderDto.orderNumber ?? 0,
      customerName: this.orderDto.customerName ?? '',
      user: this.orderDto.user ?? '',
      table: this.orderDto.table ?? '',
      createdAt: this.getDate(),
      updatedAt: this.getDate(),
    };
  }

  public updateBody(mainOrder: Order): OrderType {
    return {
      id: mainOrder.id,
      products:
        this.orderDto.products ??
        mainOrder.products.map((product) => product.id),
      restaurant: mainOrder.restaurant.id,
      takeAway: this.orderDto.takeAway ?? mainOrder.takeAway,
      orderNumber: this.orderDto.orderNumber ?? mainOrder.orderNumber,
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
}
