import "reflect-metadata";
import { ApolloServer } from "apollo-server-micro";
import { buildSchema } from "type-graphql";
import { DogResolver } from "../../src/schema/dogs.resolver";

const schema = await buildSchema({
  resolvers: [DogResolver],
});

const server = new ApolloServer({ schema });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  await server.start();
  await server.createHandler({ path: "/api/graphql" })(req, res);
}
