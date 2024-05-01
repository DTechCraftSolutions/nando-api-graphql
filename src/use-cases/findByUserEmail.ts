import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserRepository } from '../repositories/user/user-repository';

interface FindByUserEmailRequest {
  email: string;
}

interface FindByUserEmailResponse {
  user: User;
}

@Injectable()
export class FindByUserEmailUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({
    email,
  }: FindByUserEmailRequest): Promise<FindByUserEmailResponse> {
    const user = await this.userRepository.findByEmail(email);

    return {
      user,
    };
  }
}
