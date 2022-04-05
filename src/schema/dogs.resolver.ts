import { Query, Resolver } from "type-graphql";
import { Dog } from "./dogs";

@Resolver(Dog)
export class DogResolver {
  @Query(() => [Dog])
  dogs(): Dog[] {
    return [{ name: "first dog" }, { name: "second dog" }];
  }
}
