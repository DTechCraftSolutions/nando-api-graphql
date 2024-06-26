import { Body, Controller, Param, Post } from '@nestjs/common';
import { UpdateUserByEmailUseCase } from '../use-cases/update-user-by-email';
import { UpdatePreaprovalUserUseCase } from '../use-cases/update-preaproval-user';

@Controller('users')
export class UserController {
  constructor(
    private readonly updateUserUseCase: UpdateUserByEmailUseCase,
    private readonly updatePreapprovalUserUseCase: UpdatePreaprovalUserUseCase,
  ) {}

  @Post('update-preapproval')
  async updatePreapprovalUser(@Body() body: any) {
    return await this.updatePreapprovalUserUseCase.execute(body);
  }

  @Post(':email')
  async updateUser(@Param('email') email: string) {
    return await this.updateUserUseCase.execute({ email });
  }
}
