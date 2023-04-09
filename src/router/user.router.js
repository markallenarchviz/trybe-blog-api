const userRouter = require('express').Router();
const userController = require('../controller/user.controller');

userRouter.post('/', userController.signup);

module.exports = userRouter;