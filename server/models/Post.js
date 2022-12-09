const { Schema, model } = require('mongoose');

const { ObjectId } = Schema;

const postSchema = new Schema({
    createdAt: {
        type: String,
    },
    userId: {
        type: ObjectId,
        ref: 'User',
        required: true,
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        text: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        text: true,
    },
    profilePicture: {
        type: String,
        trim: true,
        default: 'https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png',
    },
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
    background: {
        type: String,
    },
    comments: [
        {
            user: {
                type: ObjectId,
                ref: 'User',
            },
            firstName: {
                type: String,
                required: true,
                trim: true,
                text: true,
            },
            lastName: {
                type: String,
                required: true,
                trim: true,
                text: true,
            },
            profilePicture: {
                type: String,
                trim: true,
                default: 'https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png',
            },
            comment: {
                type: String,
            },
            image: {
                type: String,
            },
            createdAt: {
                type: Date,
                required: true,
            },
            reacts: [
                {
                    createdAt: {
                        type: String,
                    },
                    react: {
                        type: String,
                        enum: ['like', 'love', 'haha', 'sad', 'angry', 'wow'],
                        required: true,
                    },
                },
            ],
        },
    ],
    reacts: [
        {
            createdAt: {
                type: String,
            },
            react: {
                type: String,
                enum: ['like', 'love', 'haha', 'sad', 'angry', 'wow'],
                required: true,
            },
        },
    ],
});

module.exports = model('Post', postSchema);
