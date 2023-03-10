import { DeleteOrderUseCaseInterface } from 'src/data/abstract/usecases/order/deleteOrderUseCase-interface';
import { Order } from 'src/domain/entities/order';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { DeleteOrderInterface } from 'src/presentation/abstract/controllers/order/deleteOrderController-interface';
import { Response } from 'src/utils/http/response';

export class DeleteOrderController implements DeleteOrderInterface {
  private readonly deleteOrderUseCase: DeleteOrderUseCaseInterface;
  public constructor(deleteOrderUseCase: DeleteOrderUseCaseInterface) {
    this.deleteOrderUseCase = deleteOrderUseCase;
  }

  public async execute(httpRequest: HttpRequest): Promise<HttpResponse<Order>> {
    try {
      const orderId = httpRequest.id;
      const restaurantId = httpRequest.restaurant;
      const deletedOrder = await this.deleteOrderUseCase.execute(
        orderId,
        restaurantId,
      );

      return Response.ok(deletedOrder);
    } catch (error) {
      return Response.notFound(error.message);
    }
  }
}
