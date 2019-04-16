/* EMAIL CONTROLLER */

require('dotenv').config();
const axios = require('axios');

const DC = process.env.DATA_CENTER;
const ID = process.env.LIST_ID;
const TOKEN = process.env.POSTMAN_TOKEN;
const KEY = process.env.API_KEY;

const saveToMailChimp = async (email) => {
  try {
    const url = `https://${DC}.api.mailchimp.com/3.0/lists/${ID}/members`;
    const body = {
      email_address: email,
      status: 'subscribed',
    };
    const headers = {
      'Postman-Token': TOKEN,
      'cache-control': 'no-cache',
      Authorization: `Basic ${KEY}`,
      'Content-Type': 'application/json',
    };
    const res = await axios.post(url, body, { headers });
    return console.log(res);
  } catch (err) {
    throw (err);
  }
};

module.exports = saveToMailChimp;
