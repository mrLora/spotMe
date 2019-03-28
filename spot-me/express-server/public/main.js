const initDiv = document.querySelector('#initButton');
const pathDiv = document.querySelector('#pathButtons');
const pathOne = document.querySelector('#path1');
const pathTwo = document.querySelector('#path2');

function firstClick() {
  initDiv.addEventListener('click', () => {
    initDiv.style.display = 'none';
    pathDiv.style.display = 'block';
  });
}

function secondClick() {
  pathDiv.addEventListener('click', (e) => {
    if (e.target.innerText === 'BORROWER') {
      pathDiv.style.display = 'none';
      pathOne.style.display = 'block';
    }
    else if (e.target.innerText === 'LENDER') {
      pathDiv.style.display = 'none';
      pathTwo.style.display = 'block';
    }
  })
}

firstClick();
secondClick();