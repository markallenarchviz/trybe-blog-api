const userRouter = require('express').Router();
const postsController = require('../controller/post.controller');
const authToken = require('../middlewares/auth.middleware');

userRouter.post('/', authToken, postsController.addPost);

module.exports = userRouter;