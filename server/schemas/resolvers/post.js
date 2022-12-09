const { AuthenticationError, UserInputError } = require('apollo-server-express');

const Post = require('../../models/Post');
const User = require('../../models/User');
const checkAuth = require('../../utils/check-auth');
const { validateUserPost } = require('../../utils/validate');
const getObjectId = require('../../utils/getObjectId');

module.exports = {
    Query: {
        // Get all user posts
        async getPosts() {
            try {
                const posts = await Post.find().sort({ createdAt: -1 });
                return posts;
            } catch (err) {
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
        async createPost(_, { text, type, images, background }, context) {
            const user = checkAuth(context);

            const { firstName, lastName, profilePicture } = await User.findById(user.data._id);

            if (text.trim() === '') {
                throw new Error('Post body must not be empty');
            }

            const newPost = new Post({
                createdAt: new Date().toISOString(),
                userId: user.data._id,
                firstName,
                lastName,
                profilePicture,
                text,
                type,
                images,
                background,
            });

            const post = await newPost.save();

            context.pubsub.publish('NEW_POST', {
                newPost: post,
            });

            return post;
        },

        async deletePost(_, { postId }, context) {
            const user = checkAuth(context);

            try {
                const post = await Post.findById(postId);

                // Compare the loggedIn userId with the userId attached to the post
                if (user.data._id === post.userId.toString()) {
                    await post.delete();
                    return 'Post deleted successfully';
                }
                throw new AuthenticationError('This is not your post 🙊');
            } catch (err) {
                throw new Error(err);
            }
        },
    },
};
