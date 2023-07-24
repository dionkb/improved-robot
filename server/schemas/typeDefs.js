// const { gql } = require('apollo-server-express');

// const typeDefs = gql`
//     type User {
//         _id: ID!
//         username: String!
//         email: String!
//         bookCount: Int
//         savedBooks: [Book]
//     }

//     type Book {
//         _id: ID!
//         authors: [String]
//         description: String!
//         bookId: String!
//         image: String
//         link: String
//         title: String!
//     }

//     type Auth {
//         token: ID!
//         user: User
//     }

    // input SaveBookInput {
    //     authors: [String!]
        // description: String!
        // bookId: String!
        // image: String
        // link: String
        // title: String!
    // }

//     type Query {
//         me(username: String!): User
//     }

//     type Mutation {
//         addUser(username: String!, email: String!, password: String!): Auth
//         login(email: String!, password: String!): Auth
//         saveBook(parameters: SaveBookInput): User
//         removeBook(bookId: ID!): User
//     }
// `;

// module.exports = typeDefs;

// ADD ALL OF THIS BACK IN ONCE READY TO TRANSITION OVER