import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  appConfig(app);
  initSwagger(app);
  await app.listen(3000);
}

function appConfig(app: INestApplication) {
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
}

function initSwagger(app: INestApplication) {
  SwaggerModule.setup(
    'api',
    app,
    SwaggerModule.createDocument(
      app,
      new DocumentBuilder().addServer('E-Commerce').build(),
    ),
  );
}
bootstrap();
