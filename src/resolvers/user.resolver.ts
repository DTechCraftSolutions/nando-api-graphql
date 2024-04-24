import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateUserInput } from 'src/dto/create-user.input';
import { User } from 'src/entities/user.entity';
import { DeleteUserUseCase } from 'src/use-cases/delete-user';
import { FindAllUserUseCase } from 'src/use-cases/find-all-user';
import { FindByIdUserUseCase } from 'src/use-cases/find-by-id-user';
import { RegisterUserUseCase } from 'src/use-cases/register-user';

@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly registerUserUseCase: RegisterUserUseCase,
    private readonly findAllUsersUseCase: FindAllUserUseCase,
    private readonly findByIdUserUseCase: FindByIdUserUseCase,
    private readonly deleteUserUseCase: DeleteUserUseCase,
  ) {}

  @Mutation(() => String)
  async deleteUser(@Args('id') id: string): Promise<string> {
    const { mensage } = await this.deleteUserUseCase.execute({ id });
    return mensage;
  }

  @Mutation(() => User)
  async registerUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<User> {
    const { user } = await this.registerUserUseCase.execute(createUserInput);
    return user;
  }

  @Query(() => [User])
  async findAll(): Promise<User[]> {
    return this.findAllUsersUseCase.execute();
  }

  @Query(() => User)
  async findById(@Args('id') id: string): Promise<User> {
    const { user } = await this.findByIdUserUseCase.execute({ id });
    return user;
  }
}
