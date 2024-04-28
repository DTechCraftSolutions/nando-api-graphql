import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserUpdateInput } from 'src/dto/update-user.input';
import { UserRepository } from 'src/repositories/user/user-repository';

interface UpdateUserRequest {
  id: string;
  updateUserInput: UserUpdateInput;
}

interface UpdateUserResponse {
  user: User;
}

@Injectable()
export class UpdateUserUseCase {
  constructor(private userRepository: UserRepository) {}
  async execute({
    id,
    updateUserInput,
  }: UpdateUserRequest): Promise<UpdateUserResponse> {
    const updatedUser = await this.userRepository.updateUser(
      id,
      updateUserInput,
    );

    return {
      user: updatedUser,
    };
  }
}
