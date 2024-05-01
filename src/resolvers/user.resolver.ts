import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateUserInput } from '../dto/create-user.input';
import { UserUpdateInput } from '../dto/update-user.input';
import { User } from '../entities/user.entity';
import { DeleteUserUseCase } from '../use-cases/delete-user';
import { FindAllUserUseCase } from '../use-cases/find-all-user';
import { FindByIdUserUseCase } from '../use-cases/find-by-id-user';
import { FindByUserEmailUseCase } from '../use-cases/findByUserEmail';
import { RegisterUserUseCase } from '../use-cases/register-user';
import { UpdateUserUseCase } from '../use-cases/update-user';

@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly registerUserUseCase: RegisterUserUseCase,
    private readonly findAllUsersUseCase: FindAllUserUseCase,
    private readonly findByIdUserUseCase: FindByIdUserUseCase,
    private readonly deleteUserUseCase: DeleteUserUseCase,
    private readonly updateUserUseCase: UpdateUserUseCase,
    private readonly findByUserEmailUseCase: FindByUserEmailUseCase,
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

  @Mutation(() => User)
  async updateUser(
    @Args('updateUserInput') updateUserInput: UserUpdateInput,
  ): Promise<User> {
    const { user } = await this.updateUserUseCase.execute({
      id: updateUserInput.id,
      updateUserInput,
    });
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

  @Query(() => User)
  async findByUserEmail(@Args('email') email: string): Promise<User> {
    const { user } = await this.findByUserEmailUseCase.execute({ email });
    return user;
  }
}
