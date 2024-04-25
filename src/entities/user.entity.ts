import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => String)
  id: string;

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

  @Field(() => String, { description: 'The phone of the user' })
  phone: string;
}
