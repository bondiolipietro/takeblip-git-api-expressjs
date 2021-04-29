const express = require('express');
const morgan = require('morgan');

const app = express();
const SERVER_PORT = process.env.PORT ?? 3000;

const apiRouter = require('./routes/api');

app.use(morgan('tiny'));

app.use('/', apiRouter);

app.all('*', (req, res) => {
  res.status(404).send('Nothing to see here.');
});

app.listen(SERVER_PORT, () => {
  console.log(`[server]: Server is listening at http://localhost:${SERVER_PORT}/`);
});
