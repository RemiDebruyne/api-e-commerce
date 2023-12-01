import { Controller, Get } from '@nestjs/common';
import { AppService, ProductService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("message")
  sayGoodbye(): string {
      return this.appService.logicToSayGoodbye();
    }
  }

@Controller("products")
  export class ProductController {
    constructor(private readonly productService: ProductService){}

    @Get("prod")
    getProducts(): string[] {
      return this.productService.getProducts();
    }
  }