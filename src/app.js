const express = require('express');

// ...

const app = express();

const loginRouter = require('./router/login.router');
const errorHanddler = require('./middlewares/errorHanddler');
const authToken = require('./middlewares/auth.middleware');
// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use(authToken);

app.use('/login', loginRouter);
app.use(errorHanddler);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
