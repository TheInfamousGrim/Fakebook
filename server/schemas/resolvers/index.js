const postsResolvers = require('./post');
const usersResolvers = require('./user');
const commentResolvers = require('./comment');

module.exports = {
    Post: {
        reactCount: (parent) => parent.reacts.length,
        commentCount: (parent) => parent.comments.length,
    },
    Comment: {
        reactCount: (parent) => parent.reacts.length,
    },
    Query: {
        ...postsResolvers.Query,
    },
    Mutation: {
        ...usersResolvers.Mutation,
        ...postsResolvers.Mutation,
        ...commentResolvers.Mutation,
    },
};
