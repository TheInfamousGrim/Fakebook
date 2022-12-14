const { Schema, model } = require('mongoose');

const { ObjectId } = Schema;

const reactSchema = new Schema({
    createdAt: {
        type: String,
    },
    react: {
        type: String,
        enum: ['like', 'love', 'haha', 'sad', 'angry', 'wow'],
        required: true,
    },
    postId: {
        type: ObjectId,
        ref: 'Post',
    },
    userId: {
        type: ObjectId,
        ref: 'User',
    },
});

module.exports = model('React', reactSchema);
