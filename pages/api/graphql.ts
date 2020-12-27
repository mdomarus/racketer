import { ApolloServer, gql } from 'apollo-server-micro';
import { v4 as uuidv4 } from 'uuid';

const typeDefs = gql`
  type Query {
    players: [Player!]!
  }
  type Player {
      id: String
    name: String
  }
`;

const resolvers = {
  Query: {
    players(parent, args, context) {
      return [
        { id: uuidv4(), name: 'John Doe' },
        { id: uuidv4(), name: 'Bin Laden' },
        { id: uuidv4(), name: 'Donald Trump' },
      ];
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/graphql' });
