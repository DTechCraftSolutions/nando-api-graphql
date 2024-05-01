import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserRepository } from '../repositories/user/user-repository';

interface FindByIdUserRequest {
  id: string;
}

interface FindByIdUserResponse {
  user: User;
}
@Injectable()
export class FindByIdUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ id }: FindByIdUserRequest): Promise<FindByIdUserResponse> {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new Error('User not found');
    }
    return {
      user,
    };
  }
}
