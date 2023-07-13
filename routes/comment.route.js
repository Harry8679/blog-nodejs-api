const express = require('express');
const { create, single, all, deleted } = require('../controllers/comment.controller');
const commentRouter = express.Router();

// POST/api/comments
commentRouter.post('/', create);
// GET/api/v1/comments/:id
commentRouter.get('/:id', single);
// GET/api/v1/comments
commentRouter.get('/', all);
// DELETE/api/v1/comments/:id
commentRouter.delete('/:id', deleted);
// PUT/api/v1/comments/:id
commentRouter.put('/:id', create);

module.exports = commentRouter;