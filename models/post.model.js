const mongoose = require('mongoose');

// Create Schema
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, 'La Publication est obligatoire'],
        trim: true,
    },
    description: {
        type: String,
        required: [true, 'La description de la publication est obligatoire']
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: [true, 'La Catégorie pour obligatoire']
    },
    numViews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    disLikes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Veuillez renseigner l\'autor']
    },
    photo: {
        type: String,
        required: [true, 'L\image de la publication est obligatoire.']
    }
}, {
    timestamps: true
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;