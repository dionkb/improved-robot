import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
                email
                bookCount
                savedBooks {
                    _id
                    authors
                    description
                    bookId
                    image
                    link
                    title
                }
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
                email
                bookCount
                savedBooks {
                    _id
                    authors
                    description
                    bookId
                    image
                    link
                    title
                }
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($parameters: SaveBookInput!) {
        saveBook(parameters: $parameters) {
            _id
            username
            email
            bookCount
            savedBooks {
                _id
                authors
                description
                bookId
                image
                link
                title
            }
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: String!) {
        removeBook(bookId: $bookId) {
            _id
            username
            email
            bookCount
            savedBooks {
                _id
                authors
                description
                bookId
                image
                link
                title
            }
        } 
    }
`;