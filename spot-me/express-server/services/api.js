/* POST REQUEST */

const axios = require('axios');

const saveEmail = async (email) => {
  try {
    const res = await axios.post('/', {
      email,
    });
    return res;
  } catch (err) {
    throw (err);
  }
};

module.exports = saveEmail;
