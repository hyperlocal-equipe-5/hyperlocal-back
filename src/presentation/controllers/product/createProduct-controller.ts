import { CreateProductUseCaseInterface } from 'src/data/abstract/usecases/product/createProductUseCase-interface';
import { Product } from 'src/domain/entities/product';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { CreateProductInterface } from 'src/presentation/abstract/controllers/product/createProductController-interface';
import { Response } from 'src/utils/http/response';

export class CreateProductController implements CreateProductInterface {
  private readonly createProductUseCase: CreateProductUseCaseInterface;
  public constructor(createProductUseCase: CreateProductUseCaseInterface) {
    this.createProductUseCase = createProductUseCase;
  }

  public async execute(
    httpRequest: HttpRequest,
  ): Promise<HttpResponse<Product>> {
    try {
      const createProductDto = httpRequest.body;
      const createdProduct = await this.createProductUseCase.execute(
        createProductDto,
      );

      return Response.created(createdProduct);
    } catch (error) {
      return Response.badRequest(error.message);
    }
  }
}
