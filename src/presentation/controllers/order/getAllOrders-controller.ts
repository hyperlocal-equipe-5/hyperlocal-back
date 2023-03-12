import { GetAllOrdersUseCaseInterface } from 'src/data/abstract/usecases/order/getAllOrdersUseCase-interface';
import { Order } from 'src/domain/entities/order';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { GetAllOrdersInterface } from 'src/presentation/abstract/controllers/order/getAllOrdersController-interface';
import { Response } from 'src/utils/http/response';

export class GetAllOrdersController implements GetAllOrdersInterface {
  private readonly createdOrderUserCase: GetAllOrdersUseCaseInterface;

  public constructor(createdOrderUserCase: GetAllOrdersUseCaseInterface) {
    this.createdOrderUserCase = createdOrderUserCase;
  }

  public async execute(
    httpRequest: HttpRequest,
  ): Promise<HttpResponse<Order[]>> {
    try {
      const restaurantId = httpRequest.restaurant;
      const allOrders = await this.createdOrderUserCase.execute(restaurantId);
      return Response.ok(allOrders);
    } catch (error) {
      return Response.notFound(error.message);
    }
  }
}
