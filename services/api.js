/* POST REQUEST */

const axios = require('axios');

const saveEmail = async (email) => {
  console.log(`I am the second log: ${email}`);
  try {
    const res = await axios.post('/', {
      email,
    });
    return res;
  } catch (err) {
    throw new Error('Something went wrong with your post request');
  }
};

export { saveEmail }
