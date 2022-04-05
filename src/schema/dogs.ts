import { ObjectType, ID, Field } from "type-graphql";

@ObjectType()
export class Dog {
  @Field(() => ID)
  name: string;
}
