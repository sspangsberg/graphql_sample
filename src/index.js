import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';

const mongoose = require('mongoose');

const startServer = async () => {
    const app = new express();    
    
    const server = new ApolloServer({
        typeDefs,
        resolvers
    });

    server.applyMiddleware({ app });

    await mongoose.connect('mongodb+srv://dbuser:1234@cluster0.wmgzy.mongodb.net/graphql?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
    
    app.listen({ port: 4000}, () =>
        console.log(`Server ready at http://localhost:4000${ server.graphqlPath }`)
    );
};

startServer();

