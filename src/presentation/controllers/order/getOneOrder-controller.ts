import { GetOneOrderUseCaseInterface } from 'src/data/abstract/usecases/order/getOneOrderUseCase-interface';
import { Order } from 'src/domain/entities/order';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { GetOneOrderInterface } from 'src/presentation/abstract/controllers/order/getOneOrderController-interface';
import { Response } from 'src/utils/http/response';

export class GetOneOrderController implements GetOneOrderInterface {
  private readonly getOneOrderUseCase: GetOneOrderUseCaseInterface;
  public constructor(getOneOrderUseCase: GetOneOrderUseCaseInterface) {
    this.getOneOrderUseCase = getOneOrderUseCase;
  }

  public async execute(httpRequest: HttpRequest): Promise<HttpResponse<Order>> {
    try {
      const orderId = httpRequest.id;
      const restaurantId = httpRequest.restaurant;
      const oneOrder = await this.getOneOrderUseCase.execute(
        orderId,
        restaurantId,
      );

      return Response.ok(oneOrder);
    } catch (error) {
      return Response.notFound(error.message);
    }
  }
}
