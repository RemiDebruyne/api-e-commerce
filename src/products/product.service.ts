import { Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { PrismaService } from 'src/prisma.service';
import NormalizedResponse from 'src/utils/normalized-response';


@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService){}
  
  public async create(CreateProductDto: CreateProductDto){
    const createdProduct = new NormalizedResponse(
      `Product ${CreateProductDto.name} has been created`, await this.prisma.products.create({
        data: {
          Name: CreateProductDto.name,
          Description: CreateProductDto.description,
          Price: CreateProductDto.price,
          // pas compris d'ou vient le author
          Author: {
            connect: {
              UUID: CreateProductDto.owner_uuid,
            }
          }
        },
      }),
    );
      return createdProduct.toJSON();
  }
}