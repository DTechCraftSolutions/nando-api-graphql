import { Module } from '@nestjs/common';
import { UserResolver } from 'src/resolvers/user.resolver';
import { RegisterUserUseCase } from 'src/use-cases/register-user';
import { UserRepository } from 'src/repositories/user/user-repository';
import { UserPrismaRepository } from 'src/repositories/database/prisma/repositories/user/user-prisma-repository';
import { FindAllUserUseCase } from 'src/use-cases/find-all-user';
import { FindByIdUserUseCase } from 'src/use-cases/find-by-id-user';
import { DeleteUserUseCase } from 'src/use-cases/delete-user';
import { UpdateUserUseCase } from 'src/use-cases/update-user';
import { FindByUserEmailUseCase } from 'src/use-cases/findByUserEmail';
import { UpdateUserByEmailUseCase } from 'src/use-cases/update-user-by-email';
import { UserController } from 'src/controller/user.controller';

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
    { provide: UserRepository, useClass: UserPrismaRepository },
  ],
  controllers: [UserController],
})
export class UserModule {}
