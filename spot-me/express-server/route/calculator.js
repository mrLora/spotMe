/* CALCULATOR ROUTE */

const express = require('express');
// Initializing Express Router
const calcRouter = express.Router();
const handle404 = (err, req, res, next) => {
  console.log(err);
  res.sendStatus(404);
};
calcRouter.use(handle404);

module.exports = calcRouter;
