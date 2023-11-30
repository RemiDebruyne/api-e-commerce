import { Controller, Get } from '@nestjs/common';
import { AppService, productService } from './app.service';

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

  @Controller("product")
  export class productController {
    constructor(private readonly productService: productService){}
    
    @Get()
    getProductList(): string[] {
      return this.productService.logicToProductList();
    }
  }