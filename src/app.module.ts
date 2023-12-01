import { Module } from '@nestjs/common';
import { AppController, ProductController } from './app.controller';
import { AppService, ProductService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}