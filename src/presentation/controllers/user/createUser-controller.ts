import { CreateUserUseCaseInterface } from 'src/data/abstract/usecases/user/createUserUsecase-interface';
import { User } from 'src/domain/entities/user';
import { HttpRequest } from 'src/domain/http/request';
import { HttpResponse } from 'src/domain/http/response';
import { CreateUserControllerInterface } from 'src/presentation/abstract/controllers/user/createUserController-interface';

export class CreateUserController implements CreateUserControllerInterface {
  private readonly createUserUseCase: CreateUserUseCaseInterface;

  public constructor(createUserUseCase: CreateUserUseCaseInterface) {
    this.createUserUseCase = createUserUseCase;
  }

  public async execute(httpRequest: HttpRequest): Promise<HttpResponse<User>> {
    try {
      const createUserDto = httpRequest.body;
      const createdUser = await this.createUserUseCase.execute(createUserDto);

      const response = {
        error: false,
        statusCode: 201,
        message: 'User created',
        body: createdUser,
      };

      return response;
    } catch (error) {
      const response = {
        error: true,
        statusCode: 401,
        message: error.message,
        body: {},
      };

      return response;
    }
  }
}
