// EMAILS CONTROLLER
const db = require('../model/email');
// Grab ALL emails from DB
const getAll = async (req, res, next) => {
  try {
    const emails = await db.findAll();
    res.locals.data = emails;
    next();
  } catch (err) {
    next(err);
  }
};
// Save email to DB
const create = async (req, res, next) => {
  const { email } = req.body;
  try {
    const newEmail = await db.saveEmail({ email });
    res.locals.data = newEmail;
    next();
  } catch (err) {
    next(err);
  }
};
module.exports = {
  getAll,
  create,
};
