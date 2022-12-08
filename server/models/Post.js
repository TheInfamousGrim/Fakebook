const { Schema, model } = require('mongoose');

const { ObjectId } = Schema;

const postSchema = new Schema({
    type: {
        type: String,
        enum: ['profilePicture', 'coverPicture', null],
        default: null,
    },
    text: {
        type: String,
    },
    images: {
        type: Array,
    },
    user: {
        type: ObjectId,
        ref: 'User',
        required: true,
    },
    background: {
        type: String,
    },
    comments: [
        {
            comment: {
                type: String,
            },
            image: {
                type: String,
            },
            commentBy: {
                type: ObjectId,
                ref: 'User',
            },
            commentAt: {
                type: Date,
                required: true,
            },
        },
    ],
});

module.exports = model('Post', postSchema);
