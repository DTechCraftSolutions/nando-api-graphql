import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserRepository } from 'src/repositories/user/user-repository';

interface RegisterUserRequest {
  name: string;
  email: string;
  planId: string;
  recorrent: string;
  payment: boolean;
  phone: string;
}

interface RegisterUserResponse {
  user: User;
}

@Injectable()
export class RegisterUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({
    email,
    name,
    planId,
    recorrent,
    payment,
    phone,
  }: RegisterUserRequest): Promise<RegisterUserResponse> {
    const user = await this.userRepository.create({
      email,
      name,
      planId,
      recorrent,
      payment,
      phone,
    });

    return {
      user,
    };
  }
}
