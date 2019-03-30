const initDiv = document.querySelector('#initButton');
const pathDiv = document.querySelector('#pathButtons');
const emailPath = document.querySelector('#emailPath');
const pathOne = document.querySelector('#path1');
const pathTwo = document.querySelector('#path2');

function firstClick() {
  initDiv.addEventListener('click', () => {
    initDiv.style.display = 'none';
    emailPath.style.display = 'block';
  });
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function handleSubmit() {
  emailPath.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e.path[0][0].value);
  });
}

function secondClick() {
  pathDiv.addEventListener('click', (e) => {
    if (e.target.innerText === 'BORROWER') {
      pathDiv.style.display = 'none';
      pathOne.style.display = 'block';
    } else if (e.target.innerText === 'LENDER') {
      pathDiv.style.display = 'none';
      pathTwo.style.display = 'block';
    }
  });
}

firstClick();
handleSubmit();
secondClick();
