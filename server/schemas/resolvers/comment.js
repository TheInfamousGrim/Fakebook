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
            console.log(`🔑 userID from context: ${user.data._id} 🔒`);

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
                console.log(`userID from db: ${post.userId}`);
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
                console.log(post.comments[commentIndex]);

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
    },
};
