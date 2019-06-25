import { saveEmail } from '../../services/api';
import { validateEmail } from '../functionality/validity';
import { switchSlide } from '../functionality/switch';

// Save user's email to MailChimp
const save = () => {

  const lockSymbol = document.querySelector('#symbol');
  const modal = document.querySelector('#modal');
  const input = document.querySelector('#email-input');
  const button = document.querySelector('#email-button');
  // if email is valid and the 'enter' key was pressed
  input.addEventListener('keypress', (e) => {
    
    if (validateEmail(input.value) === true && e.keyCode === 13) {
      // send email to backend
      console.log(`I am the first log: ${input.value}`);
      saveEmail(input.value);

      modal.style.display = 'none';
      // show lock icon 'unlocking'
      lockSymbol.classList.add('animated', 'fadeOut');
      lockSymbol.addEventListener('animationend', () => {

        lockSymbol.classList.replace('fa-lock', 'fa-unlock');
        lockSymbol.classList.replace('fadeOut', 'fadeIn');

      });
      // change to calculator slide after unlocking
      switchSlide();

    }

  });
  // if email is valid and the submit button was clicked
  button.addEventListener('click', () => {

    if (validateEmail(input.value) === true) {

      saveEmail(input.value);

      modal.style.display = 'none';

      lockSymbol.classList.add('animated', 'fadeOut');
      lockSymbol.addEventListener('animationend', () => {

        lockSymbol.classList.replace('fa-lock', 'fa-unlock');
        lockSymbol.classList.replace('fadeOut', 'fadeIn');

      });
      // switch to calculator slide after submitting email
      switchSlide();

    }

  });

};

export { save }
