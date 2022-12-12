const { AuthenticationError, UserInputError } = require('apollo-server-express');
const { arrayBuffer } = require('node:stream/consumers');

const Post = require('../../models/Post');
const User = require('../../models/User');
const checkAuth = require('../../utils/check-auth');

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
        async getPostById(_, { postId }) {
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

        async reactToPost(_, { postId, reactId, reactionType }, context) {
            const user = checkAuth(context);
            const userID = user.data._id;
            const { firstName, lastName, profilePicture } = await User.findById(user.data._id);

            const post = await Post.findById(postId);
            if (post) {
                if (
                    post.reacts.find(
                        (react) => react.userId.toString() === userID && react.reactionType === reactionType
                    )
                ) {
                    // Post already has the same react so unreact to it
                    post.reacts = post.reacts.filter((react) => react.userId.toString() !== userID);
                } else if (post.reacts.find((react) => react.userId.toString() === userID)) {
                    // Post has another type of reaction so the user is trying to change the reaction
                    const reactIndex = post.reacts.findIndex((reactDatabase) => reactDatabase.id === reactId);

                    // Remove just that one reaction
                    post.reacts.splice(reactIndex, 1);
                    post.reacts.push({
                        createdAt: new Date().toISOString(),
                        userId: userID,
                        firstName,
                        lastName,
                        profilePicture,
                        reactionType,
                    });
                } else {
                    // Not reacted too, react to the post
                    post.reacts.push({
                        createdAt: new Date().toISOString(),
                        userId: userID,
                        firstName,
                        lastName,
                        profilePicture,
                        reactionType,
                    });
                }
                await post.save();
                return post;
            }
            throw new UserInputError('Post not found');
        },
    },
};
