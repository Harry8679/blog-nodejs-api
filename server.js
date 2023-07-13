const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
require('./config/dbConnect');
const app = express();

const userRouter = require('./routes/user.route');
const postRouter = require('./routes/post.route');
const commentRouter = require('./routes/comment.route');
const categoryRouter = require('./routes/category.route');

// middlewares
// userRoutes
app.use('/api/v1/users', userRouter);
// postRoutes
app.use('/api/v1/posts', postRouter);
// commentRoutes
app.use('/api/v1/comments', commentRouter);
// categoryRoutes
app.use('/api/v1/categories', categoryRouter);


// Error handlers middlewares
// Listen to server
const PORT = process.env.PORT || 9000;

app.listen(PORT, console.log(`Server is running on the port ${PORT}`));