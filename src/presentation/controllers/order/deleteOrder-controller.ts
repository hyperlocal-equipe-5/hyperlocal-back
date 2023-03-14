import { DeleteOrderUseCaseInterface } from 'src/data/abstract/usecases/order/deleteOrderUseCase-interface';
import { Order } from 'src/domain/entities/order';
import { User } from 'src/domain/entities/user';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { DeleteOrderInterface } from 'src/presentation/abstract/controllers/order/deleteOrderController-interface';
import { Response } from 'src/utils/http/response';
import { UserPermissionValidator } from 'src/utils/validators/userPermission-validator';

export class DeleteOrderController implements DeleteOrderInterface {
  private readonly deleteOrderUseCase: DeleteOrderUseCaseInterface;

  public constructor(deleteOrderUseCase: DeleteOrderUseCaseInterface) {
    this.deleteOrderUseCase = deleteOrderUseCase;
  }

  public async execute(httpRequest: HttpRequest): Promise<HttpResponse<Order>> {
    try {
      const loggedUser: User = httpRequest.body.loggedUser;
      if (!UserPermissionValidator.validate(loggedUser, 'deleteOrders')) {
        return Response.unauthorized(
          'This user has no permition to perform this action.',
        );
      }

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
