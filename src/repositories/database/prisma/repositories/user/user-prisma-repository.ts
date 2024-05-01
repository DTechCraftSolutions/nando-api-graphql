import { Prisma, User } from '@prisma/client';
import { UserRepository } from '../../../../../repositories/user/user-repository';
import { PrismaService } from '../../prisma.service';
import { Injectable } from '@nestjs/common';
import { UserUpdateInput } from '../../../../../dto/update-user.input';

@Injectable()
export class UserPrismaRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async delete(id: string): Promise<User> {
    return await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }

  async findByEmail(email: string): Promise<User> {
    return await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }
  async create(data: Prisma.UserCreateInput): Promise<User> {
    return await this.prisma.user.create({
      data,
    });
  }
  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }
  async findById(id: string): Promise<User> {
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async updateUser(
    id: string,
    data: UserUpdateInput,
  ): Promise<{
    id: string;
    name: string;
    email: string;
    planId: string;
    recorrent: string;
    payment: boolean;
    phone: string;
  }> {
    return await this.prisma.user.update({
      where: {
        id,
      },
      data,
    });
  }
}
