import { Controller, Param, Post, Put } from '@nestjs/common';
import { UpdateUserByEmailUseCase } from '../use-cases/update-user-by-email';

@Controller('users')
export class UserController {
  constructor(private readonly updateUserUseCase: UpdateUserByEmailUseCase) {}

  @Post(':email')
  updateUser(@Param('email') email: string) {
    return this.updateUserUseCase.execute({ email });
  }
}
