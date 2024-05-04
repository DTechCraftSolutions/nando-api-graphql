import { UserRepository } from 'src/repositories/user/user-repository';

interface UpdatePreaprovalUserRequest {
  body: any;
}

interface UpdatePreaprovalUserResponse {}

export class UpdatePreaprovalUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ body }: UpdatePreaprovalUserRequest): Promise<any> {
    const message = ` body: ${body} `;
    return { message: message };
  }
}
