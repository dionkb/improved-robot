const { Book, User } = require('../models');

const resolvers = {
    Query: {
        me: async (parent, { username }) => {
            const searchParams = username ? { username } : {}
            return User.find(searchParams);
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const newUser = User.create(args);
            return newUser;
        },
        login: async (parent, { email, password }) => {
            const matchUser = User.findOne(
                { email, password },
                { new: true }
            );
            return matchUser;
        },
        // TODO:
        // saveBook: async (parent, { SaveBookInput }, context) => {
        //     const savedBook = await User.findOneAndUpdate(
        //         { args },
        //         { }
        //     );
        //     return savedBook;
        // },
        // removeBook: async (parent, { username }) => {
        //     const deleteSavedBook = await User.findOneAndRemove(
        //         { args },
        //         { }
        //     )
        // },
    },
};

module.exports = resolvers;