const {ApolloServer} = require('apollo-server')
const typeDefs = require('./schema/schema')
const resolvers = require('./resolvers/resolver')

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
