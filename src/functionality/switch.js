import { check } from './check';
import { filterString } from './filter';
import { path } from './modal';

// Switch to the calculator slide after submitting email
const switchSlide = () => {

  const lockSymbol = document.querySelector('#symbol');
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

  lockSymbol.addEventListener('animationend', setTimeout(() => {
    // show calculator slide once the lock icon's unlocked animation ends
    if (check() !== true) {
      // hide 'Do You Want To Be A' slide
      firstSlide.style.display = 'none';
      // show calculator slide
      secondSlide.style.display = 'flex';
      // grab the word inside the button that was clicked in first slide and turn it into a verb
      howMuchText.textContent = `How much would you like to ${filterString('ER', path)}?`;
      howMuchText.style.fontVariant = 'small-caps';
      howMuchText.style.paddingTop = '5vh';
      howMuchText.style.borderBottom = '0.3vh solid black';
      // clear calculator slides' content
      backButton.addEventListener('click', () => {

        numInput.value = '';

        pay.textContent = '';

        weekOne.textContent = '';

        weekTwo.textContent = '';

        month.textContent = '';

        secondSlide.style.display = 'none';
        
        firstSlide.style.display = 'flex';

      });

    }

  }, 2000));

};

export { switchSlide }
