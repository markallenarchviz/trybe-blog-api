const userRouter = require('express').Router();
const userController = require('../controller/user.controller');
const authToken = require('../middlewares/auth.middleware');

userRouter.post('/', userController.signup);

userRouter.get('/', authToken, userController.getAllUsers);

module.exports = userRouter;