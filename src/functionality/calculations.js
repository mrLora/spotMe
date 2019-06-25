import { filterString } from './filter';

// Helper function to output numbers that include a comma and the correct float value
const filterNum = num => num.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
// Apply necessary calculations based on which path was chosen
const applyCalc = () => {

  const howMuch = document.querySelector('#how-much');
  const input = document.querySelector('#num-input');

  const pay = document.querySelector('#pay');
  pay.style.width = '40%';

  const weekOne = document.querySelector('#week-one');
  const weekTwo = document.querySelector('#week-two');
  const month = document.querySelector('#month');

  input.addEventListener('input', (e) => {
    // eslint-disable-next-line default-case
    switch (filterString('How much would you like to ', howMuch.textContent)) {
      // calculations to apply if 'BORROWER' was clicked
      case 'borrow?':

        if (e.value !== '') {

          pay.textContent = 'Repayment timeframe options + interest:';
          pay.style.paddingLeft = '3vw';

          weekOne.textContent = `1 Week = ${filterNum(input.value * 1.01)}`;
          weekOne.style.paddingLeft = '5vw';

          weekTwo.textContent = `2 Weeks = ${filterNum(input.value * 1.025)}`;
          weekTwo.style.paddingLeft = '5vw';

          month.textContent = `1 Month = ${filterNum(input.value * 1.06)}`;
          month.style.paddingLeft = '5vw';

          pay.classList.add('animated', 'fadeInLeft', 'slower');

          weekOne.classList.add('animated', 'fadeInLeft', 'slower', 'delay-2s');

          weekTwo.classList.add('animated', 'fadeInLeft', 'slower', 'delay-3s');

          month.classList.add('animated', 'fadeInLeft', 'slower', 'delay-4s');

        }

        break;
      // calculations to apply if 'LENDER' was clicked
      case 'lend?':

        if (e.value !== '') {

          pay.textContent = 'Your money back + interest:';
          pay.style.paddingLeft = '7.5vw';

          weekOne.textContent = `1 Week = ${filterNum(input.value * 1.007)}`;
          weekOne.style.paddingLeft = '5vw';

          weekTwo.textContent = `2 Weeks = ${filterNum(input.value * 1.018)}`;
          weekTwo.style.paddingLeft = '5vw';

          month.textContent = `1 Month = ${filterNum(input.value * 1.045)}`;
          month.style.paddingLeft = '5vw';

          pay.classList.add('animated', 'fadeInLeft', 'slower');

          weekOne.classList.add('animated', 'fadeInLeft', 'slower', 'delay-2s');

          weekTwo.classList.add('animated', 'fadeInLeft', 'slower', 'delay-3s');

          month.classList.add('animated', 'fadeInLeft', 'slower', 'delay-4s');

        }

        break;
      // No Default
    }

  });

};

export { applyCalc }
