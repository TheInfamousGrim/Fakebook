const { AuthenticationError, UserInputError } = require('apollo-server-express');

const checkAuth = require('../../utils/check-auth');
const Post = require('../../models/Post');
const User = require('../../models/User');

module.exports = {
    Mutation: {
        // Create a comment
        createComment: async (_, { postId, text, image }, context) => {
            // Check authentication
            const user = checkAuth(context);
            // Find the user by id
            const userData = await User.findById(user.data._id);
            // Destructure user data
            const { firstName, lastName, profilePicture } = userData;

            // Check if the text input is empty
            if (text.trim() === '') {
                throw new UserInputError('Empty comment', {
                    errors: {
                        text: 'Comment body must not be empty',
                    },
                });
            }

            // Find the post the user wants to comment under
            const post = await Post.findById(postId);

            // If their is a post to comment under save it to the db
            if (post) {
                post.comments.unshift({
                    createdAt: new Date().toISOString(),
                    userId: user.data._id,
                    firstName,
                    lastName,
                    profilePicture,
                    text,
                    image,
                });
                await post.save();
                return post;
            }
            throw new UserInputError('Post not found');
        },

        // Delete a comment
        deleteComment: async (_, { postId, commentId }, context) => {
            // Check authentication
            const user = checkAuth(context);
            const userId = user.data._id;

            // find the post with the comment that they want to delete
            const post = await Post.findById(postId);

            // If there is a post
            if (post) {
                // Get the index of where the comment is in the array
                const commentIndex = post.comments.findIndex((commentDatabase) => commentDatabase.id === commentId);

                // If the comment belongs to the user remove it from the array
                if (post.comments[commentIndex].userId.toString() === userId) {
                    post.comments.splice(commentIndex, 1);
                    await post.save();
                    return post;
                }
                throw new AuthenticationError('Action not allowed');
            } else {
                throw new UserInputError(`Post not found`);
            }
        },

        async reactToComment(_, { postId, reactId, commentId, reactionType }, context) {
            const user = checkAuth(context);
            const userID = user.data._id;
            const { firstName, lastName, profilePicture } = await User.findById(user.data._id);

            const post = await Post.findById(postId);
            if (post) {
                // check if the comment exists
                const commentIndex = post.comments.findIndex((commentDatabase) => commentDatabase.id === commentId);
                if (commentIndex === -1) {
                    throw new UserInputError('Comment not found');
                }
                if (
                    post.comments[commentIndex].reacts.find(
                        (react) => react.userId.toString() === userID && react.reactionType === reactionType
                    )
                ) {
                    // Comment already has the same react so unreact to it
                    post.comments[commentIndex].reacts = post.comments[commentIndex].reacts.filter(
                        (react) => react.userId.toString() !== userID
                    );
                } else if (post.comments[commentIndex].reacts.find((react) => react.userId.toString() === userID)) {
                    // Post has another type of reaction so the user is trying to change the reaction
                    const reactIndex = post.comments[commentIndex].reacts.findIndex(
                        (reactDatabase) => reactDatabase.id === reactId
                    );

                    // Remove just that one reaction
                    post.comments[commentIndex].reacts.splice(reactIndex, 1);
                    post.comments[commentIndex].reacts.push({
                        createdAt: new Date().toISOString(),
                        userId: userID,
                        firstName,
                        lastName,
                        profilePicture,
                        reactionType,
                    });
                } else {
                    // Not reacted too, react to the post
                    post.comments[commentIndex].reacts.push({
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
