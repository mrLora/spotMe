import { check } from './check';

let path;

// Enter email pop-up when buttons 'BORROWER' or 'LENDER' are clicked
const triggerModal = () => {

  const modal = document.querySelector('#modal');
  const borrower = document.querySelector('#borrower');
  const lender = document.querySelector('#lender');
  const blArray = [borrower, lender];

  blArray.forEach((el) => {

    el.addEventListener('click', (e) => {
      // if lock icon is locked, display enter email pop-up
      if (check() !== false) {

        modal.style.display = 'flex';
        modal.style.position = 'absolute';
        modal.classList.add('animated', 'fadeInDown');

      }
      // Save button's text
      path = e.target.innerText;
  
    });

  });

};

export { triggerModal, path }
