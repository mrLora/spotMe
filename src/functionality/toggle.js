import { check } from './check';
import { filterString } from './filter';

// Handles switching between calculator slide and first slide while check returns false "unlocked"
const toggleSlides = () => {

  const borrower = document.querySelector('#borrower');
  const lender = document.querySelector('#lender');
  const blArray = [borrower, lender];
  // 'Do You Want To Be A' slide
  const firstSlide = document.querySelector('#second').firstChild;
  // calculator slide
  const secondSlide = document.querySelector('#second').lastChild;
  const backButton = document.querySelector('#back');
  const howMuchText = document.querySelector('#how-much');
  const numInput = document.querySelector('#num-input');
  const pay = document.querySelector('#pay');
  const weekOne = document.querySelector('#week-one');
  const weekTwo = document.querySelector('#week-two');
  const month = document.querySelector('#month');

  // Populate second slide based on which path ('BORROWER' or 'LENDER') was clicked on
  if (check() !== true) {
    // if lock symbol is already on "unlock"
    blArray.forEach((el) => {
      // populate second slide text / calculations with the correct path chosen
      el.addEventListener('click', (e) => {

        firstSlide.style.display = 'none';

        secondSlide.style.display = 'flex';

        howMuchText.textContent = `How much would you like to ${filterString('ER', e.target.innerText)}?`;
        howMuchText.style.fontVariant = 'small-caps';
        howMuchText.style.paddingTop = '5vh';
        howMuchText.style.borderBottom = '0.3vh solid black';
        // clear slides' content
        backButton.addEventListener('click', () => {

          numInput.value = '';

          pay.textContent = '';

          weekOne.textContent = '';

          weekTwo.textContent = '';

          month.textContent = '';

          secondSlide.style.display = 'none';

          firstSlide.style.display = 'flex';

        });

      });

    });

  }

};

export { toggleSlides }
