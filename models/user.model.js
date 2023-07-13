const mongoose = require('mongoose');

// Create Schema
const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "Prénom obligatoire"]
    },
    lastname: {
        type: String,
        required: [true, "Nom obligatoire"]
    },
    profilePhoto: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'Email obligatoire']
    },
    password: {
        type: String,
        required: [true, 'Mot de passe obligatoire']
    },
    postCount: {
        type: Number,
        default: 0
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        enum: ['Admin', 'Guest', 'Editor']
    },
    viewedBy: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    active: {
        type: Boolean,
        default: true
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;