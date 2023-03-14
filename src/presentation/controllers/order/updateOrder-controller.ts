import { UpdateOrderUseCaseInterface } from 'src/data/abstract/usecases/order/updateOrderUseCase-interface';
import { Order } from 'src/domain/entities/order';
import { User } from 'src/domain/entities/user';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { UpdateOrderInterface } from 'src/presentation/abstract/controllers/order/updateOrderController-interface';
import { Response } from 'src/utils/http/response';
import { UserPermissionValidator } from 'src/utils/validators/userPermission-validator';

export class UpdateOrderController implements UpdateOrderInterface {
  private readonly updateOrderUseCase: UpdateOrderUseCaseInterface;

  public constructor(updateOrderUseCase: UpdateOrderUseCaseInterface) {
    this.updateOrderUseCase = updateOrderUseCase;
  }
  public async execute(httpRequest: HttpRequest): Promise<HttpResponse<Order>> {
    try {
      const loggedUser: User = httpRequest.body.loggedUser;
      if (!UserPermissionValidator.validate(loggedUser, 'updateOrders')) {
        return Response.unauthorized(
          'This user has no permition to perform this action.',
        );
      }

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
