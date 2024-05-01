import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserRepository } from '../repositories/user/user-repository';

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
    const userExists = await this.userRepository.findByEmail(email);

    if (userExists) {
      throw new Error('User already exists');
    }

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
