const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, { username }) => {
            const searchParams = username ? { username } : {}
            return User.find(searchParams);
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const newUser = await User.create(args);
            const token = signToken(newUser);
            return { newUser, token };
        },
        login: async (parent, { email, password }) => {
            const matchUser = await User.findOne(
                { email },
            );
            const matchPassword = await matchUser.isCorrectPassword(password);
            const token = signToken(matchUser);
            return { matchUser, token };
        },
        saveBook: async (parent, { addedBook }, context) => {
            if (context.matchUser) {
                const userAddBook = await User.findByIdAndUpdate(
                    { _id: context.matchUser._id },
                    { $push: { savedBooks: addedBook }},
                    { new: true },
                );
            }
            return userAddBook;
        },
        removeBook: async (parent, { bookId }, context) => {
            if (context.matchUser) {
                const userRemoveBook = await User.findByIdAndUpdate(
                    { _id: context.matchUser._id },
                    { $pull: { savedBooks: {bookId} }},
                    { new: true },
                );
                return userRemoveBook;
            }
        },
    },
};

module.exports = resolvers;