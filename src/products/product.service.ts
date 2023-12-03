import { Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma.service';
import NormalizedResponse from 'src/utils/normalized-response';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  public async create(CreateProductDto: CreateProductDto) {
    const createdProduct = new NormalizedResponse(
      `Product ${CreateProductDto.name} has been created`,
      await this.prisma.products.create({
        data: {
          Name: CreateProductDto.name,
          Description: CreateProductDto.description,
          Price: CreateProductDto.price,
          // pas compris d'ou vient le author
          Author: {
            connect: {
              UUID: CreateProductDto.owner_uuid,
            },
          },
        },
      }),
    );
    return createdProduct.toJSON();
  }

  public async getByUUID(uuid: string) {
    const gettedProduct = new NormalizedResponse(
      `Product ${uuid} has been found`,
      await this.prisma.products.findUnique({
        where: {
          UUID: uuid,
        },
      }),
    );
    return gettedProduct.toJSON();
  }

  public async updateByUUID(uuid: string, UpdateProductDto: UpdateProductDto) {
    const updatedProduct = new NormalizedResponse(
      `Product ${uuid} informations have been modified `,
      await this.prisma.products.update({
        where: {
          UUID: uuid,
        },
        data: {
          Name: UpdateProductDto.name,
          Description: UpdateProductDto.description,
          Price: UpdateProductDto.price,
        },
      }),
    );
    return updatedProduct.toJSON();
  }

  public async deleteByUUID(uuid: string, ) {
    const deletedProduct = new NormalizedResponse(
      `Product ${uuid} has been deleted`,
      await this.prisma.products.delete({
        where: {
          UUID: uuid,
        },
      }),
    );
    return deletedProduct.toJSON();
  }
}
