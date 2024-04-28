import { User } from '@prisma/client';
import { UserRepository } from 'src/repositories/user/user-repository';

interface UpdateUserRequest {
  id: string;
  name?: string;
  email?: string;
  phone?: string;
  planId?: string;
  recorrent?: string;
  payment?: boolean;
}

interface UpdateUserResponse {
  user: User;
}

export class UpdateUserUseCase {
  constructor(private userRepository: UserRepository) {}
  async execute({
    id,
    name,
    email,
    phone,
    planId,
    recorrent,
    payment,
  }: UpdateUserRequest): Promise<UpdateUserResponse> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new Error('User not found');
    }

    if (name) {
      user.name = name;
    }

    if (email) {
      user.email = email;
    }

    if (phone) {
      user.phone = phone;
    }

    if (planId) {
      user.planId = planId;
    }

    if (recorrent) {
      user.recorrent = recorrent;
    }

    if (payment) {
      user.payment = payment;
    }

    const updatedUser = await this.userRepository.update(id, user);

    return {
      user: updatedUser,
    };
  }
}
