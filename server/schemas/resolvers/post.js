const Post = require('../../models/Post');
const checkAuth = require('../../utils/check-auth');

module.exports = {
    Query: {
        // Get all user posts
        async getPosts() {
            try {
                const posts = await Post.find();
                return posts;
            } catch {
                throw new Error(err);
            }
        },
        // Get a post by it's ID
        async getPost(_, { postId }) {
            try {
                // Await the post
                const post = await Post.findById(postId);
                // If the post exists return it
                if (post) {
                    return post;
                }
                // If the post doesn't exist show that it's not been found
                throw new Error('Post not found');
            } catch (err) {
                // Throw a new error otherwise
                throw new Error(err);
            }
        },
    },
    Mutation: {
        async createPost(_, { body }, context) {
            // Check that there is a user
            const user = checkAuth(context);

            // Create the post data
            const newPost = new Post({
                body,
                user: user._id,
                email: user.email,
                createdAt: new Date().toISOString(),
            });

            // Save the post to the db
            const post = await newPost.save();

            return post;
        },
    },
};
