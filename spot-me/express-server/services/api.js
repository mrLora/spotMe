/* POST REQUEST */

const axios = require('axios');

const saveEmail = async (email) => {
  try {
    const res = await axios.post('/', {
      email,
    });
    return console.log(res);
  } catch (err) {
    throw (err);
  }
};

module.exports = saveEmail;
