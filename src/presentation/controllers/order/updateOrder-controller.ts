import { UpdateOrderUseCaseInterface } from 'src/data/abstract/usecases/order/updateOrderUseCase-interface';
import { Order } from 'src/domain/entities/order';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { UpdateOrderInterface } from 'src/presentation/abstract/controllers/order/updateOrderController-interface';
import { Response } from 'src/utils/http/response';

export class UpdateOrderController implements UpdateOrderInterface {
  private readonly updateOrderUseCase: UpdateOrderUseCaseInterface;
  public constructor(updateOrderUseCase: UpdateOrderUseCaseInterface) {
    this.updateOrderUseCase = updateOrderUseCase;
  }
  public async execute(httpRequest: HttpRequest): Promise<HttpResponse<Order>> {
    try {
      const updateOrderDto = httpRequest.body;
      const updatedOrder = await this.updateOrderUseCase.execute(
        updateOrderDto,
      );

      return Response.ok(updatedOrder);
    } catch (error) {
      return Response.notFound(error.message);
    }
  }
}
