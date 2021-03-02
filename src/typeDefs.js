import { gql } from 'apollo-server-express';

export const typeDefs = gql`
    type Query{       
        products: [Product!]! 
        product(id: ID, name:String, description:String, price:Float, inStock:Boolean): Product
    }

    type Product {
        id: ID!
        name: String!
        description: String!
        price: Float!
        inStock: Boolean!       
    }

    type Mutation {      
        createProduct(name: String!, description: String!, price: Float!, inStock: Boolean): Product!
        updateProduct(id: ID!, name: String!, description: String!, price: Float!, inStock: Boolean): String
        deleteProduct(id: ID!): String!
    }
`