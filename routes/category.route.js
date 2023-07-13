const express = require('express');
const { create, single, all, deleted } = require('../controllers/category.controller');
const categoryRouter = express.Router();

// POST/api/categories
categoryRouter.post('/', create);
// GET/api/v1/categories/:id
categoryRouter.get('/:id', single);
// GET/api/v1/categories
categoryRouter.get('/', all);
// DELETE/api/v1/categories/:id
categoryRouter.delete('/:id', deleted);
// PUT/api/v1/categories/:id
categoryRouter.put('/:id', create);

module.exports = categoryRouter;