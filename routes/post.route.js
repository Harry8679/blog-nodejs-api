const express = require('express');
const { create, single, all, deleted } = require('../controllers/post.controller');
const postRouter = express.Router();

// POST/api/posts
postRouter.post('/', create);
// GET/api/v1/posts/:id
postRouter.get('/:id', single);
// GET/api/v1/posts
postRouter.get('/', all);
// DELETE/api/v1/posts/:id
postRouter.delete('/:id', deleted);
// PUT/api/v1/posts/:id
postRouter.put('/:id', create);

module.exports = postRouter;