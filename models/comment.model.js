const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
    {
        post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post',
            required: [true, 'La publication est obligatoire']
        },
        user: {
            type: Object,
            requiredd: [true, 'L\'auteur est laboratoire']
        },
        description: {
            type: String,
            required: [true, 'Le commentaire est obligatoire']
        }
    }, {
        timestamps: true
    });

    const Comment = mongoose.model('Comment', commentSchema);

    module.exports = Comment;