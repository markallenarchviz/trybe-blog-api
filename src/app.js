const express = require('express');

// ...

const app = express();

const loginRouter = require('./router/login.router');
const userRouter = require('./router/user.router');
const categoriesRouter = require('./router/categories.router');

const errorHanddler = require('./middlewares/errorHanddler');

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/login', loginRouter);

app.use('/user', userRouter);

app.use('/categories', categoriesRouter);

app.use(errorHanddler);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
