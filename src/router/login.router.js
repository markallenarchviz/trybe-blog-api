const loginRouter = require('express').Router();
const loginController = require('../controller/login.controller');

loginRouter.post('/', loginController.signin);

module.exports = loginRouter;