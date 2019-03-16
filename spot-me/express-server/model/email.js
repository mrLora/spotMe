// EMAIL MODEL
const db = require('../config/connection');
// Pulling ALL emails & Saving ONE email
const findAll = () => db.many(`
  SELECT *
  FROM emails
`);
const saveEmail = email => db.one(`
  INSERT INTO emails (email)
  VALUES ($/email/)
`, email);
module.exports = {
  findAll,
  saveEmail,
};
