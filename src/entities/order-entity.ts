import { CreateOrderDto } from 'src/domain/dto/order/createOrder-dto';
import { UpdateOrderDto } from 'src/domain/dto/order/updateOrder-dto';
import { Order } from 'src/domain/entities/order';
import { IdGeneratorAdapterInterface } from 'src/utils/adapters/abstract/idGeneratorAdapter-interface';
import { OrderEntityInterface } from './abstract/interfaces/orderEntity-interface';
import { OrderType } from './abstract/types/order-type';
import { Entity } from './entity';

export class OrderEntity extends Entity implements OrderEntityInterface {
  private readonly orderDto: CreateOrderDto | UpdateOrderDto;
  private readonly idGeneratorAdapter: IdGeneratorAdapterInterface;

  public constructor(
    orderDto: CreateOrderDto | UpdateOrderDto,
    idGeneratorAdapter: IdGeneratorAdapterInterface,
  ) {
    super();
    this.orderDto = orderDto;
    this.idGeneratorAdapter = idGeneratorAdapter;
  }

  public validate(): void {
    throw new Error('Method not implemented.');
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
      createdOn: this.getDate(),
      updatedOn: this.getDate(),
    };
  }

  public updateBody(mainOrder: Order): OrderType {
    return {
      id: mainOrder.id,
      products:
        this.orderDto.products ??
        mainOrder.products.map((product) => product.id),
      restaurant: this.orderDto.restaurant,
      takeAway: this.orderDto.takeAway ?? mainOrder.takeAway,
      orderNumber: this.orderDto.orderNumber ?? mainOrder.orderNumber,
      customerName: this.orderDto.customerName ?? mainOrder.customerName,
      user: this.orderDto.user ?? mainOrder.user.id,
      table: this.orderDto.table ?? mainOrder.table.id,
      createdOn: mainOrder.createdOn,
      updatedOn: this.getDate(),
    };
  }
}
