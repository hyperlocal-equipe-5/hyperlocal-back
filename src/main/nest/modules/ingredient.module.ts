import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { makeCreateIngredientFactory } from 'src/main/factories/ingredient/createIngredient-factory';
import { CreateIngredientController } from 'src/presentation/controllers/ingredient/createIngredient-controller';
import { makeDeleteIngredientFactory } from 'src/main/factories/ingredient/deleteIngredient-factory';
import { makeGetAllIngredientFactory } from 'src/main/factories/ingredient/getAllIngredients-factory';
import { makeGetOneIngredientFactory } from 'src/main/factories/ingredient/getOneIngredient-factory';
import { makeUpdateIngredientFactory } from 'src/main/factories/ingredient/updateIngredient-factory';
import { GetAllIngredientsController } from 'src/presentation/controllers/ingredient/getAllIngredients-controller';
import { GetOneIngredientController } from 'src/presentation/controllers/ingredient/getOneIngredient-controller';
import { UpdateIngredientController } from 'src/presentation/controllers/ingredient/updateIngredient-controller';
import { IngredientControllerAdmin } from '../controllers/ingredient.controller.admin';
import { DeleteIngredientController } from 'src/presentation/controllers/ingredient/deleteIngredient-controller';
import { LoginMiddleware } from '../middlewares/login.middleware';

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
