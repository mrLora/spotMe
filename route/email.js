/* EMAIL ROUTE */

const express = require('express');
const emailController = require('../controller/email');
// Initializing Express Router
const emailRouter = express.Router();

const handle404 = (err, req, res, next) => {
  console.log(err);
  res.sendStatus(404);
};

emailRouter.route('/').post((req, res) => emailController(req.body.email));
emailRouter.use(handle404);

module.exports = emailRouter;
