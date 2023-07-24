// const { gql } = require('apollo-server-express');

// const typeDefs = gql`
//     type User {
//         _id: ID!
//         username: String!
//         email: String!
//         password: String!
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

//     }

//     type Query {
//         user(username: String!): User
//     }

//     type Mutation {
//         createUser(username: String!, email: String!, password: String!): Auth
//         login(email: String!, password: String!): Auth
//         saveBook(FIXME:): ???
//         deleteBook(bookId: ID!): Book
//     }
// `;

// module.exports = typeDefs;

// ADD ALL OF THIS BACK IN ONCE READY TO TRANSITION OVER