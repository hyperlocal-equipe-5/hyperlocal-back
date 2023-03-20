import { CreateOrderUseCaseInterface } from 'src/data/abstract/usecases/order/createOrderUseCase-interface';
import { Order } from 'src/domain/entities/order';
import { User } from 'src/domain/entities/user';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { CreateOrderInterface } from 'src/presentation/abstract/controllers/order/createOrderController-interface';
import { Response } from 'src/utils/http/response';
import { UserPermissionValidator } from 'src/utils/validators/userPermission-validator';

export class CreateOrderController implements CreateOrderInterface {
  private readonly createOrderUseCase: CreateOrderUseCaseInterface;

  public constructor(createOrderUseCase: CreateOrderUseCaseInterface) {
    this.createOrderUseCase = createOrderUseCase;
  }

  public async execute(httpRequest: HttpRequest): Promise<HttpResponse<Order>> {
    try {
      const loggedUser: User = httpRequest.body.loggedUser;
      if (!UserPermissionValidator.validate(loggedUser, 'createOrders')) {
        return Response.unauthorized(
          'This user has no permition to perform this action.',
        );
      }

      const createOrderDto = httpRequest.body;
      const createdOrder = await this.createOrderUseCase.execute(
        createOrderDto,
      );

      return Response.created(createdOrder);
    } catch (error) {
      return Response.badRequest(error.message);
    }
  }
}
