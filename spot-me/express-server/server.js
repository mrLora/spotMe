// EXPRESS SERVER CONFIGURATION
// Dependecies
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
// Setting up PORT
const PORT = process.env.PORT || 3000;
// Initializing Express, Morgan, & Body-parser
const app = express();
app.use(logger('dev'));
app.use(express.static(path.join(`${__dirname}/dist/public`)));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Error Handlers for Route and Server
// eslint-disable-next-line no-unused-vars
app.use('*', (err, req, res, next) => {
  res.status(400).json({
    error: err,
    message: err.message,
  });
});
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(500).json({
    error: err,
    message: err.message,
  });
});
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Sever up and listening on ${PORT}, in ${app.get('env')} mode.`);
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.end('good job!');
});
