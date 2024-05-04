import { Module } from '@nestjs/common';
import { UserResolver } from '../resolvers/user.resolver';
import { RegisterUserUseCase } from '../use-cases/register-user';
import { UserRepository } from '../repositories/user/user-repository';
import { UserPrismaRepository } from '../repositories/database/prisma/repositories/user/user-prisma-repository';
import { FindAllUserUseCase } from '../use-cases/find-all-user';
import { FindByIdUserUseCase } from '../use-cases/find-by-id-user';
import { DeleteUserUseCase } from '../use-cases/delete-user';
import { UpdateUserUseCase } from '../use-cases/update-user';
import { FindByUserEmailUseCase } from '../use-cases/findByUserEmail';
import { UpdateUserByEmailUseCase } from '../use-cases/update-user-by-email';
import { UserController } from '../controller/user.controller';
import { UpdatePreaprovalUserUseCase } from 'src/use-cases/update-preaproval-user';

@Module({
  providers: [
    UserResolver,
    RegisterUserUseCase,
    FindAllUserUseCase,
    FindByIdUserUseCase,
    DeleteUserUseCase,
    UpdateUserUseCase,
    FindByUserEmailUseCase,
    UpdateUserByEmailUseCase,
    UpdatePreaprovalUserUseCase,
    { provide: UserRepository, useClass: UserPrismaRepository },
  ],
  controllers: [UserController],
})
export class UserModule {}
