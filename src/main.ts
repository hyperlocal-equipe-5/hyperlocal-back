import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './main/nest/modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Cardapio-API')
    .setDescription('Api destinada a aplicação web de um cardápio digital.')
    .setVersion('1.0.0')
    .addTag('status')
    .addTag('/login')
    .addTag('/admin/user')
    .addTag('/user')
    .addTag('/admin/restaurant')
    .addTag('/restaurant')
    .addTag('/admin/role')
    .addTag('/admin/category')
    .addTag('/category')
    .addTag('/admin/product')
    .addTag('/product')
    .addTag('/admin/ingredient')
    .addTag('/ingredient')
    .addTag('/admin/table')
    .addTag('/table')
    .addTag('/admin/order')
    .addTag('/order')
    .addTag('/admin/review')
    .addTag('/reviews')
    .addTag('/review-question')
    .addTag('/admin/review-question')
    .addTag('/password-recovery')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT || 7777);
}
bootstrap();
