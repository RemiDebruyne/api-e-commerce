import { Inject, Injectable } from '@nestjs/common';

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
export class ProductService {
  getProducts(): string[] {
    return ["product1", "product2", "prdouct3"]
  }
}