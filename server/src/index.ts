import {ApolloServer} from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";
import {typeDefs} from "./schema";

async function StartApolloServer () {
   const server = new ApolloServer({ typeDefs });
   const {url} = await startStandaloneServer(server);
   console.log(`Server Running... At ${url}`);
}

StartApolloServer();