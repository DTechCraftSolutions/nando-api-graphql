import { Injectable } from '@nestjs/common';
import { UserUpdateInput } from 'src/dto/update-user.input';
import { UserRepository } from 'src/repositories/user/user-repository';

interface UpdateUserByEmailRequest {
  email: string;
}

@Injectable()
export class UpdateUserByEmailUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ email }: UpdateUserByEmailRequest) {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new Error('User not found');
    }
    return this.userRepository.updateUser(user.id, {
      id: user.id,
      payment: true,
    });
  }
}
