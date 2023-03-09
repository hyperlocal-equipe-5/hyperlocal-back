import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoginMiddleware } from '../middlewares/login.middleware';
import { makeCreateIngredientFactory } from 'src/main/factories/Ingredient/createIngredient-factory';
import { makeDeleteIngredientFactory } from 'src/main/factories/Ingredient/deleteIngredient-factory';
import { makeGetAllIngredientFactory } from 'src/main/factories/Ingredient/getAllIngredients-factory';
import { makeGetOneIngredientFactory } from 'src/main/factories/Ingredient/getOneIngredient-factory';
import { makeUpdateIngredientFactory } from 'src/main/factories/Ingredient/updateIngredient-factory';
import { CreateIngredientController } from 'src/presentation/controllers/Ingredient/createIngredient-controller';
import { DeleteIngredientController } from 'src/presentation/controllers/Ingredient/deleteIngredient-controller';
import { GetAllIngredientsController } from 'src/presentation/controllers/Ingredient/getAllIngredients-controller';
import { GetOneIngredientController } from 'src/presentation/controllers/Ingredient/getOneIngredient-controller';
import { UpdateIngredientController } from 'src/presentation/controllers/Ingredient/updateIngredient-controller';
import { IngredientControllerAdmin } from '../controllers/ingredient.controller.admin';

@Module({
  controllers: [IngredientControllerAdmin],
  providers: [
    {
      provide: CreateIngredientController,
      useFactory: makeCreateIngredientFactory,
    },
    {
      provide: DeleteIngredientController,
      useFactory: makeDeleteIngredientFactory,
    },
    {
      provide: UpdateIngredientController,
      useFactory: makeUpdateIngredientFactory,
    },
    {
      provide: GetAllIngredientsController,
      useFactory: makeGetAllIngredientFactory,
    },
    {
      provide: GetOneIngredientController,
      useFactory: makeGetOneIngredientFactory,
    },
  ],
})
export class IngredientModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoginMiddleware).forRoutes('/admin');
  }
}
