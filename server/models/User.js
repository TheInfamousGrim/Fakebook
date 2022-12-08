const { Schema, model } = require('mongoose');

const { ObjectId } = Schema;

const userSchema = new Schema({
    createdAt: {
        type: Date,
        required: true,
    },
    first_name: {
        type: String,
        required: [true, 'first name is required'],
        trim: true,
        text: true,
    },
    last_name: {
        type: String,
        required: [true, 'last name is required'],
        trim: true,
        text: true,
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true,
        match: [
            /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
            'Must match an email address',
        ],
    },
    password: {
        type: String,
        required: [true, 'password is required'],
        minlength: 8,
    },
    picture: {
        type: String,
        trim: true,
        default: 'https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png',
    },
    cover: {
        type: String,
        trim: true,
    },
    gender: {
        type: String,
        required: [true, 'gender is required'],
        trim: true,
    },
    birth_year: {
        type: Number,
        required: true,
        trim: true,
    },
    birth_month: {
        type: Number,
        required: true,
        trim: true,
    },
    birth_day: {
        type: Number,
        required: true,
        trim: true,
    },
    verified: {
        type: Boolean,
        default: false,
    },
    friends: [
        {
            type: ObjectId,
            ref: 'User',
        },
    ],
    following: [
        {
            type: ObjectId,
            ref: 'User',
        },
    ],
    followers: [
        {
            type: ObjectId,
            ref: 'User',
        },
    ],
    requests: [
        {
            type: ObjectId,
            ref: 'User',
        },
    ],
    search: [
        {
            user: {
                type: ObjectId,
                ref: 'User',
                required: true,
            },
            createdAt: {
                type: Date,
                required: true,
            },
        },
    ],
    details: {
        bio: {
            type: String,
        },
        other_name: {
            type: String,
        },
        job: {
            type: String,
        },
        workplace: {
            type: String,
        },
        high_school: {
            type: String,
        },
        college: {
            type: String,
        },
        current_city: {
            type: String,
        },
        hometown: {
            type: String,
        },
        relationship: {
            type: String,
            enum: ['Single', 'In a relationship', 'Married', 'Divorced'],
        },
        instagram: {
            type: String,
        },
    },
    savedPosts: [
        {
            post: {
                type: ObjectId,
                ref: 'Post',
            },
            saved_at: {
                type: Date,
                required: true,
            },
        },
    ],
});

module.exports = model('User', userSchema);
