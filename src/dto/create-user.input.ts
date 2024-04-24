import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'The name of the user' })
  name: string;

  @Field(() => String, { description: 'The email of the user' })
  email: string;

  @Field(() => String, { description: 'The plan of the user' })
  planId: string;

  @Field(() => String, { description: 'The recorrent of the user' })
  recorrent: string;

  @Field(() => Boolean, { description: 'The payment of the user' })
  payment: boolean;
}
