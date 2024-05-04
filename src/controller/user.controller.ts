import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { UpdateUserByEmailUseCase } from '../use-cases/update-user-by-email';

@Controller('users')
export class UserController {
  constructor(private readonly updateUserUseCase: UpdateUserByEmailUseCase) {}

  @Post(':email')
  updateUser(@Param('email') email: string) {
    return this.updateUserUseCase.execute({ email });
  }

  @Post('preapproval')
  updatePreapprovalUser(@Body('body') body: any) {
    return console.log(body);
  }
}
