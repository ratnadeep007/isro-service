const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const mongoose = require('mongoose');
const config = require('./config');
const PORT = config.PORT;
const { typeDefs, resolvers } = require('./graphql');

mongoose.connect(config.MONGODB, { useNewUrlParser: true });

const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  introspection: true,
  playground: true
});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: PORT },  () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
})