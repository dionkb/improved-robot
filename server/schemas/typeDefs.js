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

//     type Query {
//         me(username: String!): User
//     }

//     type Mutation {
//         addUser(username: String!, email: String!, password: String!): Auth
//         login(email: String!, password: String!): Auth
//         saveBook(authors: [String!], description: String!, bookId: String!, image: String, link: String, title: String!): User
//         removeBook(bookId: ID!): User
//     }
// `;

// module.exports = typeDefs;

// TODO: Look into creating an "input type" to handle all of the parameters passed into the saveBook mutation
// ADD ALL OF THIS BACK IN ONCE READY TO TRANSITION OVER