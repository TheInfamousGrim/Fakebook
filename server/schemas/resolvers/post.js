const Post = require('../../models/Post');

module.exports = {
    Query: {
        getPosts: async () => Post.find(),
    },
};
