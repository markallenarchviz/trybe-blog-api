const userRouter = require('express').Router();
const postsController = require('../controller/post.controller');
const authToken = require('../middlewares/auth.middleware');

userRouter.use(authToken);
userRouter.post('/', postsController.addPost);
userRouter.get('/', postsController.getAllposts);
// userRouter.get('/:id', postsController.getPostById);

module.exports = userRouter;