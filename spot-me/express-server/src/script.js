const saveEmail = require('../services/api');

/* DIVIDERS */

// Rendering AND Styling
const renderDivider = () => {
  const divider = document.querySelector('.divider');
  divider.style.width = '100vw';
  divider.style.height = '10vh';
};
renderDivider();
// Coming Soon
const renderSection = () => {
  const section = document.querySelector('section');
  const body = document.createElement('div');
  body.className = 'hero-body';
  const container = document.createElement('div');
  container.className = 'container';
  const title = document.createElement('h1');
  title.className = 'title';
  title.textContent = 'Coming soon...';
  title.classList.add('animated', 'fadeInLeft', 'slow');
  container.appendChild(title);
  body.appendChild(container);
  section.appendChild(body);
};
renderSection();

/* FIRST CONTAINER */

// Rendering AND Styling
const renderFirst = () => {
  const first = document.querySelector('#first');
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
  const sloganText = document.createElement('strong');
  sloganText.textContent = `Get Money When Needed
                                    OR
                            Earn Money By Lending`;
  slogan.appendChild(sloganText);
  const firstArray = [logo, slogan];
  firstArray.forEach(el => first.appendChild(el));
  // Giving all divs in First Container a width and a height
  firstArray.forEach((el) => {
    const divs = el;
    divs.style.width = '25vw';
    divs.style.height = '40vh';
    divs.style.display = 'flex';
    divs.style.flexDirection = 'column';
    divs.style.justifyContent = 'center';
    divs.style.alignItems = 'center';
    divs.style.textAlign = 'center';
  });
  firstArray[1].innerText = `Get Money When Needed
                                      OR
                             Earn Money By Lending`;
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
  const button = document.createElement('i');
  button.className = 'fas fa-sort-down fa-2x';
  // Toggle slogan/about text
  slogan.addEventListener('mouseenter', () => {
    slogan.innerText = `About Lorem ipsum dolor sit amet 
    consectetur adipisicing elit. Possimus dolores 
    temporibus beatae? Ut quasi aliquid rem totam 
    eaque, ex, ducimus quibusdam dolore modi porro 
    alias expedita cum dolorum molestiae corrupti.`;
    slogan.classList.add('animated', 'fadeIn', 'slow');
    slogan.appendChild(button);
    button.classList.add('animated', 'infinite', 'zoomIn', 'slower');
    // Seamless scroll to interactive slides
    button.addEventListener('click', () => {
      console.log('click');
    });
  }).addEventListener('mouseleave', () => {
    slogan.innerText = `Get Money When Needed
                                OR
                        Earn Money By Lending`;
    // slogan.removeChild(button);
  });
};
toggle();

/* SECOND CONTAINER */

// Rendering AND Styling
const renderSecond = () => {
  const second = document.querySelector('#second');
  second.style.display = 'flex';
  second.style.flexDirection = 'column';
  second.style.justifyContent = 'space-evenly';
};
renderSecond();
// Render Modal
const renderModal = () => {
  const field = document.createElement('div');
  field.className = 'field has-addons';
  const controlOne = document.createElement('div');
  controlOne.className = 'control has-icons-left has-icons-right';
  const input = document.createElement('input');
  input.type = 'email';
  input.className = 'input';
  input.placeholder = 'Enter your email';
  const spanOne = document.createElement('span');
  spanOne.className = 'icon is-small is-left';
  const iconOne = document.createElement('i');
  iconOne.className = 'fas fa-envelope';
  const spanTwo = document.createElement('span');
  spanTwo.className = 'icon is-small is-right';
  const iconTwo = document.createElement('i');
  iconTwo.className = 'fas fa-exclamation-triangle';
  const controlTwo = document.createElement('div');
  controlTwo.className = 'control';
  const button = document.createElement('button');
  button.type = 'submit';
  button.className = 'button is-success';
  button.innerText = 'Subscribe';
  controlTwo.appendChild(button);
  spanOne.appendChild(iconOne);
  spanTwo.appendChild(iconTwo);
  controlOne.appendChild(input);
  controlOne.appendChild(spanOne);
  controlOne.appendChild(spanTwo);
  field.appendChild(controlOne);
  field.appendChild(controlTwo);
  return field;
};
// Second container will serve two interactive slides
const renderSecondChildren = () => {
  const second = document.querySelector('#second');
  const secondOne = document.createElement('div');
  const secondTwo = document.createElement('div');
  const secondArray = [secondOne, secondTwo];
  secondArray.forEach(el => second.appendChild(el));
  // FIRST SLIDE
  // secondArray[0].style.flex = '1';
  secondArray[0].style.display = 'flex';
  secondArray[0].style.flexDirection = 'row';
  secondArray[0].style.justifyContent = 'center';
  secondArray[0].style.justifyContent = 'space-evenly';
  secondArray[0].style.flexWrap = 'wrap';
  // Adding text and two clickable divs/buttons
  const become = document.createElement('div');
  become.className = 'block has-icons-left';
  const becomeText = document.createElement('h1');
  becomeText.textContent = 'Become A:';
  becomeText.className = 'title';
  const lock = document.createElement('span');
  lock.className = 'icon is-small is-left';
  const symbol = document.createElement('i');
  symbol.className = 'fas fa-lock fa-lg';
  lock.appendChild(symbol);
  become.appendChild(lock);
  become.appendChild(becomeText);
  const borrower = document.createElement('div');
  borrower.className = 'button is-success';
  const lender = document.createElement('div');
  lender.className = 'button is-danger';
  const modal = document.createElement('div');
  modal.className = 'block';
  modal.appendChild(renderModal());
  const secondOneArray = [modal, become, borrower, lender];
  secondOneArray.forEach(el => secondArray[0].appendChild(el));
  secondOneArray.forEach((el) => {
    const divs = el;
    divs.style.width = '30%';
    divs.style.height = '45vh';
    divs.style.display = 'flex';
    divs.style.flexDirection = 'column';
    divs.style.justifyContent = 'center';
    divs.style.alignItems = 'center';
  });
  // Modal
  secondOneArray[0].style.width = '100vw';
  secondOneArray[0].style.height = '63.15vh';
  secondOneArray[0].style.zIndex = '5';
  secondOneArray[0].style.backgroundColor = 'rgb(54, 54, 54)';
  secondOneArray[0].style.display = 'none';
  // Become text
  secondOneArray[1].style.width = '75vw';
  secondOneArray[1].style.height = '10vh';
  // Borrower div
  secondOneArray[2].innerText = 'BORROWER';
  // Lender div
  secondOneArray[3].innerText = 'LENDER';
  // SECOND SLIDE
  secondArray.className = 'block';
  secondArray[1].style.height = '63.15vh';
  secondArray[1].style.backgroundColor = 'white';
  secondArray[1].style.display = 'none';
  secondArray[1].style.flexDirection = 'column';
  secondArray[1].style.alignItems = 'center';
  secondArray[1].style.alignItems = 'space-evenly';
  // Adding text/question, input field, submit button, and three lines for the results
  const howMuch = document.createElement('div');
  howMuch.className = 'block';
  const howMuchText = document.createElement('h1');
  howMuchText.className = 'title';
  howMuch.appendChild(howMuchText);
  const input = document.createElement('div');
  input.className = 'block';
  const field = document.createElement('div');
  field.className = 'field';
  const control = document.createElement('div');
  control.className = 'control has-icons-left';
  const numInput = document.createElement('input');
  numInput.className = 'input is-success';
  numInput.type = 'number';
  numInput.placeholder = 'Enter amount';
  const span = document.createElement('span');
  span.className = 'icon is-small is-left';
  const icon = document.createElement('i');
  icon.className = 'fas fa-wallet';
  span.appendChild(icon);
  control.appendChild(numInput);
  control.appendChild(span);
  field.appendChild(control);
  input.appendChild(field);
  const weekOne = document.createElement('h2');
  weekOne.className = 'subtitle';
  const weekTwo = document.createElement('h2');
  weekTwo.className = 'subtitle';
  const month = document.createElement('h2');
  month.className = 'subtitle';
  const pay = document.createElement('h1');
  pay.className = 'subtitle';
  const secondTwoArray = [howMuch, input, pay, weekOne, weekTwo, month];
  secondTwoArray.forEach(el => secondArray[1].appendChild(el));
  secondTwoArray.forEach((el) => {
    const divs = el;
    divs.style.width = '25%';
    divs.style.height = '10vh';
  });
  // How much text
  secondTwoArray[0].style.width = '75%';
  secondTwoArray[0].style.height = '10vh';
  secondTwoArray[0].style.display = 'flex';
  secondTwoArray[0].style.justifyContent = 'center';
  secondTwoArray[0].style.alignItems = 'center';
  // Number Input
  secondTwoArray[1].style.width = '25%';
  secondTwoArray[1].style.height = '5vh';
};
renderSecondChildren();

// Functionality
// Check to see if icon is locked or unlocked
const check = () => {
  const lock = document.querySelector('#second').firstChild.childNodes[1].firstChild.firstChild;
  let checker;
  if (lock.classList.contains('fa-lock')) checker = true;
  else checker = false;
  return checker;
};
setInterval(check, 1000);
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
  backButton.className = 'button is-dark';
  backButton.textContent = 'Back';
  const borrower = document.querySelector('#second').firstChild.childNodes[2];
  const lender = document.querySelector('#second').firstChild.childNodes[3];
  const howMuchText = document.querySelector('#second').lastChild.firstChild.firstChild;
  const numInput = document.querySelector('#second').lastChild.childNodes[1].firstChild.firstChild.firstChild;
  const pay = document.querySelector('#second').lastChild.childNodes[2];
  const weekOne = document.querySelector('#second').lastChild.childNodes[3];
  const weekTwo = document.querySelector('#second').lastChild.childNodes[4];
  const month = document.querySelector('#second').lastChild.childNodes[5];
  const blArray = [borrower, lender];
  blArray.forEach((el) => {
    // Populate second slide based on which path was clicked on
    el.addEventListener('click', (e) => {
      if (check() !== true) {
        firstSlide.style.display = 'none';
        secondSlide.style.display = 'flex';
        howMuchText.textContent = `How much will you ${filterStr('ER', e.target.innerText)}`;
        secondSlide.appendChild(backButton);
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
    });
  });
};
switchSlides();
// Enter email pop-up
const triggerModal = () => {
  const modal = document.querySelector('#second').firstChild.firstChild;
  const borrower = document.querySelector('#second').firstChild.childNodes[2];
  const lender = document.querySelector('#second').firstChild.childNodes[3];
  borrower.addEventListener('mouseover', () => {
    if (check() !== false) {
      modal.style.display = 'flex';
      modal.style.position = 'absolute';
      modal.classList.add('animated', 'fadeInDown');
    }
  });
  lender.addEventListener('mouseover', () => {
    if (check() !== false) {
      modal.style.display = 'flex';
      modal.style.position = 'absolute';
      modal.classList.add('animated', 'fadeInDown');
    }
  });
};
triggerModal();
// Helper function to asure user is entering an email
const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// Toggle email validity indicator
const emailIsValid = () => {
  const modal = document.querySelector('#second').firstChild.firstChild;
  const input = modal.firstChild.firstChild.firstChild;
  const icon = modal.firstChild.firstChild.lastChild.firstChild;
  const button = modal.firstChild.lastChild.firstChild;
  if (validateEmail(input.value) === true) {
    icon.classList.remove('fa-exclamation-triangle');
    icon.className = 'fas fa-check';
    button.className = 'button is-success';
  } else {
    icon.className = 'fas fa-exclamation-triangle';
    button.className = 'button is-warning';
  }
};
setInterval(emailIsValid, 500);
// Send POST request to express server with inputted email
const save = () => {
  const lock = document.querySelector('#second').firstChild.childNodes[1].firstChild.firstChild;
  const modal = document.querySelector('#second').firstChild.firstChild;
  const input = modal.firstChild.firstChild.firstChild;
  const button = modal.firstChild.lastChild.firstChild;
  input.addEventListener('keypress', (e) => {
    if (validateEmail(input.value) === true && e.keyCode === 13) {
      saveEmail(input.value);
      lock.classList.replace('fa-lock', 'fa-unlock');
      modal.style.display = 'none';
    }
  });
  button.addEventListener('click', () => {
    if (validateEmail(input.value) === true) {
      saveEmail(input.value);
      lock.classList.replace('fa-lock', 'fa-unlock');
      modal.style.display = 'none';
      lock.classList.add('animated', 'fadeIn', 'slower');
    }
  });
};
save();
// Helper function to output numbers that include a comma and the correct float value
const filterNum = num => num.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
// Apply necessary calculations based on which path was chosen
const applyCalc = () => {
  const howMuch = document.querySelector('#second').lastChild.firstChild;
  const input = document.querySelector('#second').lastChild.childNodes[1].firstChild.firstChild.firstChild;
  const pay = document.querySelector('#second').lastChild.childNodes[2];
  const weekOne = document.querySelector('#second').lastChild.childNodes[3];
  const weekTwo = document.querySelector('#second').lastChild.childNodes[4];
  const month = document.querySelector('#second').lastChild.childNodes[5];
  input.addEventListener('input', () => {
    // eslint-disable-next-line default-case
    switch (filterStr('How much will you ', howMuch.innerText)) {
      case 'borrow':
        pay.textContent = 'Repayment time from options';
        weekOne.textContent = `1 Week = ${filterNum(input.value * 1.00)}`;
        weekTwo.textContent = `2 Weeks = ${filterNum(input.value * 2.50)}`;
        month.textContent = `1 Month = ${filterNum(input.value * 6.00)}`;
        pay.classList.add('animated', 'fadeInLeft', 'slow');
        weekOne.classList.add('animated', 'fadeInLeft', 'slow', 'delay-1s');
        weekTwo.classList.add('animated', 'fadeInLeft', 'slow', 'delay-2s');
        month.classList.add('animated', 'fadeInLeft', 'slow', 'delay-3s');
        break;
      case 'lend':
        pay.textContent = 'Repayment time from options';
        weekOne.textContent = `1 Week = ${filterNum(input.value * 0.75)}`;
        weekTwo.textContent = `2 Weeks = ${filterNum(input.value * 1.80)}`;
        month.textContent = `1 Month = ${filterNum(input.value * 4.50)}`;
        break;
      // No Default
    }
  });
};
applyCalc();

/* THIRD CONTAINER */

// Rendering AND Styling
const renderThird = () => {
  const third = document.querySelector('#third');
  third.style.width = '100vw';
  third.style.height = '50vh';
  third.style.display = 'flex';
  third.style.flexDirection = 'row';
  third.style.justifyContent = 'center';
};
renderThird();
// Adding three small containers EACH containing
// Small logo, text/title, and description
const renderThirdChildren = () => {
  const third = document.querySelector('#third');
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
      thirdArray[x].childNodes[y].style.width = '25%';
      thirdArray[x].childNodes[y].style.height = '25%';
      thirdArray[x].childNodes[y].style.display = 'flex';
      thirdArray[x].childNodes[y].style.flexDirection = 'column';
      thirdArray[x].childNodes[y].style.justifyContent = 'center';
      thirdArray[x].childNodes[y].style.alignItems = 'center';
    }
    thirdArray[x].style.width = '33%';
    thirdArray[x].style.height = '50vh';
    thirdArray[x].style.display = 'flex';
    thirdArray[x].style.flexDirection = 'column';
    thirdArray[x].style.justifyContent = 'space-evenly';
    thirdArray[x].style.alignItems = 'center';
    thirdArray[x].className = 'box';
  }
};
renderThirdChildren();
// Icons
const renderIcons = () => {
  const third = document.querySelector('#third');
  const calendar = document.createElement('i');
  calendar.className = 'far fa-calendar-alt fa-4x';
  third.childNodes[0].firstChild.appendChild(calendar);
  const money = document.createElement('i');
  money.className = 'fas fa-dollar-sign fa-4x';
  third.childNodes[1].firstChild.appendChild(money);
  const shield = document.createElement('i');
  shield.className = 'fas fa-shield-alt fa-4x';
  third.childNodes[2].firstChild.appendChild(shield);
};
renderIcons();
// Titles
const renderTitles = () => {
  const third = document.querySelector('#third');
  third.childNodes.forEach((el) => {
    const child = el;
    child.childNodes[1].style.width = '50%';
    child.childNodes[1].style.height = '10%';
  });
  const calendarTitle = document.createElement('h2');
  calendarTitle.textContent = 'Calendar';
  calendarTitle.className = 'title';
  third.childNodes[0].childNodes[1].appendChild(calendarTitle);
  const moneyTitle = document.createElement('h2');
  moneyTitle.textContent = 'Money';
  moneyTitle.className = 'title';
  third.childNodes[1].childNodes[1].appendChild(moneyTitle);
  const shieldTitle = document.createElement('h2');
  shieldTitle.textContent = 'Security';
  shieldTitle.className = 'title';
  third.childNodes[2].childNodes[1].appendChild(shieldTitle);
};
renderTitles();
// Info
const renderInfo = () => {
  const third = document.querySelector('#third');
  third.childNodes.forEach((el) => {
    const child = el;
    child.childNodes[2].style.width = '100%';
    child.childNodes[2].style.height = '30%';
  });
  const calendarInfo = document.createElement('h2');
  calendarInfo.textContent = `Lorem ipsum dolor sit amet
  consectetur adipisicing elit. Possimus dolores
  temporibus beatae?`;
  calendarInfo.className = 'subtitle';
  third.childNodes[0].childNodes[2].appendChild(calendarInfo);
  const moneyInfo = document.createElement('h2');
  moneyInfo.textContent = `Lorem ipsum dolor sit amet
  consectetur adipisicing elit. Possimus dolores
  temporibus beatae?`;
  moneyInfo.className = 'subtitle';
  third.childNodes[1].childNodes[2].appendChild(moneyInfo);
  const shieldInfo = document.createElement('h2');
  shieldInfo.textContent = `Lorem ipsum dolor sit amet
  consectetur adipisicing elit. Possimus dolores
  temporibus beatae?`;
  shieldInfo.className = 'subtitle';
  third.childNodes[2].childNodes[2].appendChild(shieldInfo);
};
renderInfo();
// Animations
// const renderAnimations = () => {

// };
// renderAnimations();
