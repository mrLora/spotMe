// EXPRESS SERVER CONFIGURATION
// Dependecies
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
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

const addToMailChimp = async (email) => {
  try {
    const url = 'https://us20.api.mailchimp.com/3.0/lists/a02d15475c/members';
    const body = {
      email_address: email,
      status: 'subscribed',
    };
    const headers = {
      'Postman-Token': '8114418c-0f31-4ed0-ac8c-c10cd578fbf6',
      'cache-control': 'no-cache',
      Authorization: 'Basic YW55c3RyaW5nOmVmMTZmOGZkNzU0Mzg5MjkzNmI3NmE1OGUxNTc0NTQ2LXVzMjA=',
      'Content-Type': 'application/json',
    };
    const res = await axios.post(url, body, { headers });
    return console.log(res);
  } catch (err) {
    throw (err);
  }
};

app.post('/', (req, res) => {
  addToMailChimp(req.body.email);
  res.end('good job!');
});
