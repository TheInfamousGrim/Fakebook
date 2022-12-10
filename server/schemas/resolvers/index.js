const postsResolvers = require('./post');
const usersResolvers = require('./user');
const commentResolvers = require('./comment');

module.exports = {
    Query: {
        ...postsResolvers.Query,
    },
    Mutation: {
        ...usersResolvers.Mutation,
        ...postsResolvers.Mutation,
        ...commentResolvers.Mutation,
    },
};
