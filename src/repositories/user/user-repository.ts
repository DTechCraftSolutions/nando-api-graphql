import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { UserUpdateInput } from '../../dto/update-user.input';
@Injectable()
export abstract class UserRepository {
  abstract create(data: Prisma.UserCreateInput): Promise<User>;
  abstract findById(id: string): Promise<User>;
  abstract findByEmail(email: string): Promise<User>;
  abstract findAll(): Promise<User[]>;
  abstract delete(id: string): Promise<User>;
  abstract updateUser(id: string, data: UserUpdateInput): Promise<User>;
}
