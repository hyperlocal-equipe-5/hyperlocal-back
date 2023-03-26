import { OrderPriceCalculatorUseCaseInterface } from 'src/data/abstract/usecases/order/orderPriceCalculatorUseCase-interface';
import { CreateOrderDto } from 'src/domain/dto/order/createOrder-dto';
import { UpdateOrderDto } from 'src/domain/dto/order/updateOrder-dto';
import { IngredientRepositoryInterface } from 'src/infra/abstract/repositories/ingredientRepository.interface';
import { ProductRepositoryInterface } from 'src/infra/abstract/repositories/productRepository-interface';

export class OrderPriceCalculatorUseCase
  implements OrderPriceCalculatorUseCaseInterface
{
  private readonly productRepository: ProductRepositoryInterface;
  private readonly ingredientRepository: IngredientRepositoryInterface;

  public constructor(
    productRepository: ProductRepositoryInterface,
    ingredientRepository: IngredientRepositoryInterface,
  ) {
    this.productRepository = productRepository;
    this.ingredientRepository = ingredientRepository;
  }

  public async execute(
    orderDto: CreateOrderDto | UpdateOrderDto,
  ): Promise<number> {
    const restaurantId = orderDto.restaurant;

    const priceArray = await Promise.all(
      orderDto.products.map(async (product) => {
        const foundProduct = await this.productRepository.getOne(
          product.product,
          restaurantId,
        );

        const ingredients = await this.ingredientRepository.getAll(
          restaurantId,
        );

        const ingredientsPrice = product.ingredientsAdded
          .map((ingredient) => {
            const ingredientPrice =
              ingredients.find((item) => (item.id = ingredient.ingredient))
                .price * ingredient.quantity;
            return ingredientPrice;
          })
          .reduce((price1, price2) => price1 + price2);

        const productPrice = foundProduct.price;

        return productPrice + ingredientsPrice;
      }),
    );

    const finalPrice = priceArray.reduce((price1, price2) => price1 + price2);

    return finalPrice;
  }
}
