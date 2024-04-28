import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateUserInput } from './create-user.input';

@InputType()
export class UserUpdateInput extends PartialType(CreateUserInput) {
  @Field(() => String)
  id: string;
}
