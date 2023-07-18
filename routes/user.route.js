const express = require('express');
const { register, login, single, all, update, deleted } = require('../controllers/user.controller');
const userRouter = express.Router();
const isLogin = require('../middlewares/isLogin.middleware');

// POST/api/users/register
userRouter.post('/register', register);
// POST/api/v1/users/login
userRouter.post('/login', login);
// GET/api/v1/users/:id
userRouter.get('/profile', isLogin, single);
// GET/api/v1/users
userRouter.get('/:id', all);
// PUT/api/v1/users/:id
userRouter.put('/:id', update);
// DELETE/api/v1/users/:id
userRouter.delete('/:id', deleted);

module.exports = userRouter;