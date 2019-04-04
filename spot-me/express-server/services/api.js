const url = 'http://localhost:3001';

const saveEmail = (email) => {
  const opts = {
    method: 'POST',
    body: {
      email,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  };
  fetch(url, opts);
};

// module.exports = saveEmail;
