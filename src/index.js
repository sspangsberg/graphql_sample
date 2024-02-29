import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';

const mongoose = require('mongoose');

//load configuration from .env file
require('dotenv-flow').config();

const startServer = async () => {
    const app = new express();    
    
    const server = new ApolloServer({
        typeDefs,
        resolvers
    });

    server.applyMiddleware({ app });

    await mongoose.connect(process.env.DBHOST, {});
    
    app.listen({ port: 4000}, () =>
        console.log(`Server ready at http://localhost:4000${ server.graphqlPath }`)
    );
};

startServer();

