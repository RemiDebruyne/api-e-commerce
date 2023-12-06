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
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ProductService } from 'src/products/product.service';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly productsService: ProductService,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get(':uuid')
  public getByUUID(@Param('uuid') uuid: string) {
    return this.usersService.getByUUID(uuid);
  }

  @Patch(':uuid')
  public updateByUUID(
    @Param('uuid') uuid: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.updateByUUID(uuid, updateUserDto);
  }

  @Delete(':uuid')
  public deleteByUUID(@Param('uuid') uuid: string) {
    return this.usersService.deleteByUUID(uuid);
  }

  @Get()
  public getProductByUserUUID(@Param('uuid') uuid: string) {
    return this.productsService.getProductsByUserUUID(uuid);
  }

  @Delete('')
  public deletedProductByUserUUID(@Param('uuid') uuid: string) {
    return this.productsService.deleteByUUID(uuid);
  }
}
