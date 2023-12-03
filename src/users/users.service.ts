import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { userInfo } from 'os';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService){}

  public async create(createUserDto: CreateUserDto){
    const createdUser = await this.prisma.users.create({
      data: {
        Pseudo: createUserDto.pseudo,
        Mail: createUserDto.mail
      },
    });
    return createUserDto
  }

  public async getByUUID(uuid: string) {
    const gettedUser = await this.prisma.users.findUnique({
      where: {
        UUID: uuid,
      },
    });
    return gettedUser;
  }


  findAll() {
    return `This action returns all users`;
  }

 

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
