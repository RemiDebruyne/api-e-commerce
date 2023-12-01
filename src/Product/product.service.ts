import { Inject, Injectable } from '@nestjs/common';


@Injectable()
export class ProductService {
  getProducts(): string[] {
    return ["product1", "product2", "prdouct3"]
  }
}