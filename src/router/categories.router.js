const userRouter = require('express').Router();
const categoriesController = require('../controller/categories.controller');
const authToken = require('../middlewares/auth.middleware');

userRouter.post('/', authToken, categoriesController.addCategory);
userRouter.get('/', authToken, categoriesController.getAllCategories);
module.exports = userRouter;