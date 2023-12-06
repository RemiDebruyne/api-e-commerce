import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() CreateProductDto: CreateProductDto) {
    return this.productService.create(CreateProductDto);
  }

  @Get(':uuid')
  public getByUUID(@Param('uuid') uuid: string) {
    return this.productService.getByUUID(uuid);
  }

  @Patch(':uuid')
  public updateByUUID(
    @Param('uuid') uuid: string,
    @Body() UpdateProductDto: UpdateProductDto,
  ) {
    return this.productService.updateByUUID(uuid, UpdateProductDto);
  }

  @Delete(':uuid')
  public deleteByUUID(@Param('uuid') uuid: string) {
    return this.productService.deleteByUUID(uuid);
  }
}
