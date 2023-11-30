import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  logicToSayGoodbye(): string {
    return 'Goodbye';
  }
}

@Injectable()
export class productService {
  logicToProductList(...products): string[] {
   return []
  }
}