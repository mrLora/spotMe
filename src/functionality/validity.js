// Helper function to asure user is entering an email
const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// Toggle email validity indicator
const emailIsValid = () => {

  const input = document.querySelector('#email-input');
  const icon = document.querySelector('#exclamation-icon');
  const button = document.querySelector('#email-button');

  if (validateEmail(input.value) === true) {
    // if email is valid replace icon with a check indicator
    icon.classList.remove('fa-exclamation-triangle');
    icon.className = 'fas fa-check';

    button.className = 'button is-success';

  } else {

    icon.className = 'fas fa-exclamation-triangle';

    button.className = 'button is-warning';

  }

};

export { validateEmail, emailIsValid }
