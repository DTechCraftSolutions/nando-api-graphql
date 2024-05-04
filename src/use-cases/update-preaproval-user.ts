import { User } from '@prisma/client';
import { UserRepository } from 'src/repositories/user/user-repository';

interface UpdatePreaprovalUserRequest {}

interface UpdatePreaprovalUserResponse {
  user: User;
}

export class UpdatePreaprovalUserUseCase {}
