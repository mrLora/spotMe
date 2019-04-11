const saveEmail = require('../services/api');
// const body = document.querySelector('body');
// body.style.display = 'flex';
// body.style.flexDirection = 'column';
/* DIVIDERS */

// Rendering AND Styling
const renderDividers = () => {
  const divider = document.querySelectorAll('.divider');
  divider.forEach((el) => {
    const div = el;
    div.style.width = '100vw';
    div.style.height = '10vh';
    div.style.backgroundColor = 'white';
  });
};
renderDividers();

/* FIRST CONTAINER */

// Rendering AND Styling
const renderFirst = () => {
  const first = document.querySelector('#first');
  first.style.width = '100vw';
  first.style.height = '40vh';
  first.style.backgroundColor = 'blue';
  first.style.display = 'flex';
  first.style.flexDirection = 'row';
  first.style.justifyContent = 'space-evenly';
};
renderFirst();
// Adding divs for the logo, slogan, and an about-me
const renderFirstChildren = () => {
  const first = document.querySelector('#first');
  const logo = document.createElement('div');
  const img = document.createElement('img');
  img.src = './images/logo.png';
  logo.appendChild(img);
  const slogan = document.createElement('div');
  const firstArray = [logo, slogan];
  firstArray.forEach(el => first.appendChild(el));
  // Giving all divs in First Container a width and a height
  firstArray.forEach((el) => {
    const divs = el;
    divs.style.width = '30%';
    divs.style.height = '40vh';
    divs.style.display = 'flex';
    divs.style.justifyContent = 'center';
    divs.style.alignItems = 'center';
  });
  firstArray[0].style.backgroundColor = 'lightcoral';
  // firstArray[0].style.backgroundImage = 'url(./images/logo.png)';
  // firstArray[0].style.backgroundRepeat = 'no-repeat';
  // firstArray[0].style.backgroundSize = '50% 50%';
  firstArray[1].style.backgroundColor = 'lightslategray';
  firstArray[1].innerText = `Get Money When Needed
                                      OR
                             Earn Money by Lending`;
};
renderFirstChildren();

// Functionality
// Used to only fire a function once
const once = (fn, context) => {
  let result;
  return function execute() {
    if (fn) {
      // eslint-disable-next-line prefer-rest-params
      result = fn.apply(context || this, arguments);
      // eslint-disable-next-line no-param-reassign
      fn = null;
    }
    return result;
  };
};
// Allows events to be chained to one element
EventTarget.prototype.addEventListener = (() => {
  const { addEventListener } = EventTarget.prototype;
  return function el() {
    // this refers to the element
    // this also loses its context inside an arrow funtcion
    // eslint-disable-next-line prefer-rest-params
    addEventListener.apply(this, arguments);
    return this;
  };
})();
// Show/hide between the slogan and about
const toggle = () => {
  const slogan = document.querySelector('#first').lastChild;
  const button = document.createElement('button');
  // Toggle slogan/about text
  slogan.addEventListener('mouseenter', () => {
    slogan.style.backgroundColor = 'blue';
    slogan.innerText = 'About me';
    slogan.appendChild(button);
    // Seamless scroll to interactive slides
    button.addEventListener('click', () => {
      console.log('click');
    });
  }).addEventListener('mouseleave', () => {
    slogan.style.backgroundColor = 'lightslategray';
    slogan.innerText = `Get Money When Needed
                                OR
                        Earn Money by Lending`;
    slogan.removeChild(button);
  });
};
toggle();

/* SECOND CONTAINER */

// Rendering AND Styling
const renderSecond = () => {
  const second = document.querySelector('#second');
  second.style.backgroundcolor = 'black';
  second.style.width = '100vw';
  second.style.height = '80vh';
  second.style.display = 'flex';
};
renderSecond();
// Second container will serve two interactive slides
const renderSecondChildren = () => {
  const second = document.querySelector('#second');
  const secondOne = document.createElement('div');
  const secondTwo = document.createElement('div');
  const secondArray = [secondOne, secondTwo];
  secondArray.forEach(el => second.appendChild(el));
  // FIRST SLIDE
  secondArray[0].style.flex = '1';
  secondArray[0].style.backgroundColor = 'yellow';
  secondArray[0].style.display = 'flex';
  secondArray[0].style.flexDirection = 'row';
  secondArray[0].style.justifyContent = 'center';
  secondArray[0].style.justifyContent = 'space-evenly';
  secondArray[0].style.flexWrap = 'wrap';
  // Adding text and two clickable divs/buttons
  const modal = document.createElement('div');
  const becomeText = document.createElement('div');
  const borrower = document.createElement('div');
  const lender = document.createElement('div');
  const modalText = document.createElement('h1');
  modalText.innerText = 'Please Enter Your Email';
  const form = document.createElement('form');
  form.action = '/';
  form.method = 'POST';
  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.placeholder = 'Enter your email';
  const submit = document.createElement('button');
  form.appendChild(emailInput);
  form.appendChild(submit);
  modal.appendChild(modalText);
  modal.appendChild(form);
  const secondOneArray = [modal, becomeText, borrower, lender];
  secondOneArray.forEach(el => secondArray[0].appendChild(el));
  secondOneArray.forEach((el) => {
    const divs = el;
    divs.style.width = '30%';
    divs.style.height = '60vh';
    divs.style.display = 'flex';
    divs.style.flexDirection = 'column';
    divs.style.justifyContent = 'center';
    divs.style.alignItems = 'center';
  });
  // Modal
  secondOneArray[0].style.width = '100vw';
  secondOneArray[0].style.height = '80vh';
  secondOneArray[0].style.zIndex = '5';
  secondOneArray[0].style.backgroundColor = 'grey';
  secondOneArray[0].style.display = 'none';
  // Become text
  secondOneArray[1].style.width = '75%';
  secondOneArray[1].style.height = '10vh';
  secondOneArray[1].style.backgroundColor = 'red';
  secondOneArray[1].innerText = 'Become a: (Pick One)';
  // Borrower div
  secondOneArray[2].style.backgroundColor = 'blue';
  secondOneArray[2].innerText = 'BORROWER';
  // Lender div
  secondOneArray[3].style.backgroundColor = 'green';
  secondOneArray[3].innerText = 'LENDER';
  // SECOND SLIDE
  secondArray[1].style.flex = '1';
  secondArray[1].style.backgroundColor = 'violet';
  secondArray[1].style.display = 'none';
  secondArray[1].style.flexDirection = 'column';
  secondArray[1].style.alignItems = 'center';
  secondArray[1].style.alignItems = 'space-evenly';
  // Adding text/question, input field, submit button, and three lines for the results
  const howMuchText = document.createElement('div');
  const numInput = document.createElement('input');
  const results = document.createElement('p');
  numInput.type = 'number';
  numInput.placeholder = 'Enter amount';
  const secondTwoArray = [howMuchText, numInput, results];
  secondTwoArray.forEach(el => secondArray[1].appendChild(el));
  secondTwoArray.forEach((el) => {
    const divs = el;
    divs.style.width = '25%';
    divs.style.height = '10vh';
  });
  // How much text
  secondTwoArray[0].style.width = '75%';
  secondTwoArray[0].style.height = '15vh';
  secondTwoArray[0].style.backgroundColor = 'orange';
  secondTwoArray[0].style.display = 'flex';
  secondTwoArray[0].style.justifyContent = 'center';
  secondTwoArray[0].style.alignItems = 'center';
  // Number Input
  secondTwoArray[1].style.width = '25%';
  secondTwoArray[1].style.height = '5vh';
};
renderSecondChildren();

// Functionality
// Helper function to remove specified characters from given string
const filterStr = (filter, str) => {
  const reg = new RegExp(filter);
  return str.replace(reg, '').toLowerCase();
};
// Toggle between first and second slide
const switchSlides = () => {
  const firstSlide = document.querySelector('#second').firstChild;
  const secondSlide = document.querySelector('#second').lastChild;
  const backButton = document.createElement('button');
  const borrower = document.querySelector('#second').firstChild.childNodes[2];
  const lender = document.querySelector('#second').firstChild.childNodes[3];
  const howMuch = document.querySelector('#second').lastChild.firstChild;
  const numInput = document.querySelector('#second').lastChild.childNodes[1];
  const results = document.querySelector('#second').lastChild.childNodes[2];
  const blArray = [borrower, lender];
  blArray.forEach((el) => {
    // Populate second slide based on which path was clicked on
    el.addEventListener('click', (e) => {
      firstSlide.style.display = 'none';
      secondSlide.style.display = 'flex';
      howMuch.innerText = `How much will you ${filterStr('ER', e.target.innerText)}`;
      secondSlide.appendChild(backButton);
      backButton.addEventListener('click', () => {
        numInput.value = '';
        results.innerText = '';
        secondSlide.style.display = 'none';
        firstSlide.style.display = 'flex';
      });
    });
  });
};
// Enter email pop-up
const triggerModal = () => {
  const modal = document.querySelector('#second').firstChild.firstChild;
  const text = document.querySelector('#second').firstChild.childNodes[1];
  const borrower = document.querySelector('#second').firstChild.childNodes[2];
  const lender = document.querySelector('#second').firstChild.childNodes[3];
  const blArray = [text, borrower, lender];
  const ref = () => {
    setTimeout(() => {
      blArray.forEach((el) => {
        const div = el;
        div.style.display = 'none';
      });
      modal.style.display = 'flex';
    }, 1000);
  };
  blArray.forEach((el) => {
    if (modal.style.display === 'none') {
      el.addEventListener('mouseover', ref, true);
    } else {
      el.removeEventListener('mouseover', ref, true);
    }
  });
};
triggerModal();
// Helper function to asure user is entering an email
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
// Send POST request to express server with inputted email
const save = () => {
  const modal = document.querySelector('#second').firstChild.firstChild;
  const form = document.querySelector('#second').firstChild.firstChild.lastChild;
  const email = document.querySelector('#second').firstChild.firstChild.lastChild.firstChild;
  validateEmail(email);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    saveEmail(email.value);
    modal.style.display = 'none';
    switchSlides();
  });
};
save();
// Helper function to output numbers that include a comma and the correct float value
const filterNum = num => num.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
// Apply necessary calculations based on which path was chosen
const applyCalc = () => {
  const secondSlide = document.querySelector('#second').lastChild;
  const howMuch = document.querySelector('#second').lastChild.firstChild;
  const numInput = document.querySelector('#second').lastChild.childNodes[1];
  const results = document.querySelector('#second').lastChild.childNodes[2];
  numInput.addEventListener('input', () => {
    // eslint-disable-next-line default-case
    switch (filterStr('How much will you ', howMuch.innerText)) {
      case 'borrow':
        results.innerText = `Repayment time from options
          1 Week = ${filterNum(numInput.value * 1.00)}
          2 Weeks = ${filterNum(numInput.value * 2.50)}
          1 Month = ${filterNum(numInput.value * 6.00)}`;
        secondSlide.appendChild(results);
        break;
      case 'lend':
        results.innerText = `Repayment time from options
          1 Week = ${filterNum(numInput.value * 0.75)}
          2 Weeks = ${filterNum(numInput.value * 1.80)}
          1 Month = ${filterNum(numInput.value * 4.50)}`;
        secondSlide.appendChild(results);
        break;
      // No Default
    }
  });
};
applyCalc();

/* THIRD CONTAINER */

// Rendering AND Styling
const third = document.querySelector('#third');
third.style.width = '100vw';
third.style.height = '50vh';
third.style.backgroundColor = 'purple';
third.style.display = 'flex';
third.style.flexDirection = 'row';
third.style.justifyContent = 'center';
// Adding three small containers EACH containing
// Small logo, text/title, and description
const thirdArray = [];
for (let i = 0; i <= 2; i += 1) {
  thirdArray.push(document.createElement('div'));
}
for (let j = 0; j <= thirdArray.length - 1; j += 1) {
  third.appendChild(thirdArray[j]);
  thirdArray.forEach(el => el.appendChild(document.createElement('div')));
}
for (let x = 0; x <= thirdArray.length - 1; x += 1) {
  for (let y = 0; y <= thirdArray.length - 1; y += 1) {
    thirdArray[x].childNodes[y].style.width = '15%';
    thirdArray[x].childNodes[y].style.height = '15%';
    thirdArray[x].childNodes[y].style.backgroundColor = 'pink';
  }
  thirdArray[x].style.width = '31%';
  thirdArray[x].style.height = '50vh';
  thirdArray[x].style.display = 'flex';
  thirdArray[x].style.flexDirection = 'column';
  thirdArray[x].style.justifyContent = 'space-evenly';
  thirdArray[x].style.alignItems = 'center';
}
thirdArray[0].style.backgroundColor = 'black';
thirdArray[1].style.backgroundColor = 'grey';
thirdArray[2].style.backgroundColor = 'brown';
// for (let y = 0; y <= thirdArray.length - 1; y += 1) {
//   thirdArray[y].childNodes[y].style.width = '15%';
//   thirdArray[y].childNodes[y].style.height = '15%';
//   thirdArray[y].childNodes[y].style.backgroundColor = 'pink';
// }
// thirdArray[0].childNodes[1].style.width = '15%';
// thirdArray[0].childNodes[1].style.height = '15%';
// thirdArray[0].childNodes[1].style.backgroundColor = 'pink';
