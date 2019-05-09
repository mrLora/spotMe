/* POST REQUEST */

const saveEmail = require('../services/api');

/* DIVIDER */

// Background
const addBackground = () => {
  const body = document.querySelector('body');
  body.style.backgroundImage = "url('./images/white.jpg')";
  body.style.backgroundSize = 'cover';
  body.style.backgroundRepeat = 'no-repeat';
};
addBackground();
// Rendering AND Styling
const renderDivider = () => {
  const divider = document.querySelector('.divider');
  divider.style.width = '100vw';
  divider.style.height = '10vh';
};
renderDivider();
// Slogan
const renderSection = () => {
  const section = document.querySelector('section');
  section.className = 'hero is-small';
  const body = document.createElement('div');
  body.className = 'hero-body';
  const container = document.createElement('div');
  container.className = 'container';
  container.style.textAlign = 'center';
  const sloganOne = document.createElement('h1');
  sloganOne.className = 'title is-1';
  sloganOne.textContent = 'Get money when needed';
  sloganOne.style.fontVariant = 'small-caps';
  sloganOne.style.color = '#417505';
  sloganOne.style.letterSpacing = '0.5vw';
  sloganOne.classList.add('animated', 'fadeInLeft', 'slow');
  const sloganTwo = document.createElement('h1');
  sloganTwo.className = 'title is-1';
  sloganTwo.textContent = 'OR';
  sloganTwo.style.color = '#417505';
  sloganTwo.style.letterSpacing = '0.25vw';
  sloganTwo.classList.add('animated', 'fadeInLeft', 'slow', 'delay-1s');
  const sloganThree = document.createElement('h1');
  sloganThree.className = 'title is-1';
  sloganThree.textContent = 'Earn money by lending';
  sloganThree.style.fontVariant = 'small-caps';
  sloganThree.style.color = '#417505';
  sloganThree.style.letterSpacing = '0.5vw';
  sloganThree.classList.add('animated', 'fadeInLeft', 'slow', 'delay-2s');
  container.appendChild(sloganOne);
  container.appendChild(sloganTwo);
  container.appendChild(sloganThree);
  body.appendChild(container);
  section.appendChild(body);
};
renderSection();

/* FIRST CONTAINER */

// Rendering & Styling
const renderFirst = () => {
  const first = document.querySelector('#first');
  first.style.display = 'flex';
  first.style.flexDirection = 'row';
  first.style.justifyContent = 'space-between';
};
renderFirst();
// Adding divs for the logo, coming soon, and an about-me
const renderFirstChildren = () => {
  const first = document.querySelector('#first');
  const logo = document.createElement('div');
  const img = document.createElement('img');
  img.src = './images/logo.png';
  img.style.paddingRight = '10vw';
  logo.appendChild(img);
  const comingSoon = document.createElement('div');
  comingSoon.className = 'block';
  const soonText = document.createElement('h1');
  soonText.textContent = 'Coming Soon';
  comingSoon.style.paddingLeft = '10vw';
  comingSoon.appendChild(soonText);
  const firstArray = [logo, comingSoon];
  firstArray.forEach(el => first.appendChild(el));
  // Giving all divs in First Container a width and a height
  firstArray.forEach((el) => {
    const divs = el;
    divs.style.width = '25vw';
    divs.style.height = '25vh';
    divs.className = 'title is-4';
    divs.style.display = 'flex';
    divs.style.flexDirection = 'column';
    divs.style.justifyContent = 'center';
    divs.style.alignItems = 'center';
    divs.style.textAlign = 'center';
  });
  firstArray[1].innerText = 'Coming Soon...';
};
renderFirstChildren();

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
  input.className = 'input is-medium';
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
  controlTwo.className = 'control buttons are-medium';
  const button = document.createElement('button');
  button.type = 'submit';
  button.className = 'button is-success';
  button.innerText = 'Early-Access';
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
  secondArray[0].style.display = 'flex';
  secondArray[0].style.flexDirection = 'row';
  secondArray[0].style.justifyContent = 'center';
  secondArray[0].style.justifyContent = 'space-evenly';
  secondArray[0].style.flexWrap = 'wrap';
  // Adding text and two clickable divs(buttons)
  // "Do you want to be a" TEXT
  const become = document.createElement('div');
  become.style.marginTop = '10vh';
  become.style.marginBottom = '10vh';
  become.className = 'block has-icons-left';
  const becomeText = document.createElement('h1');
  becomeText.textContent = 'Do you want to be a';
  becomeText.style.fontVariant = 'small-caps';
  becomeText.className = 'subtitle is-4';
  // Lock Icon
  const lock = document.createElement('span');
  lock.className = 'icon is-small is-left';
  lock.style.paddingBottom = '5vh';
  const symbol = document.createElement('i');
  symbol.className = 'fas fa-lock fa-2x';
  lock.appendChild(symbol);
  become.appendChild(lock);
  become.appendChild(becomeText);
  // BORROWER Div(button) -LEFT
  const borrower = document.createElement('div');
  borrower.className = 'button is-dark is-rounded';
  borrower.style.backgroundColor = '#7E0032';
  borrower.style.color = 'white';
  // OR Text
  const or = document.createElement('div');
  or.className = 'block';
  or.innerText = 'OR';
  or.className = 'title is-1';
  // LENDER Div(button) -RIGHT
  const lender = document.createElement('div');
  lender.className = 'button is-dark is-rounded';
  lender.style.backgroundColor = '#7E0032';
  lender.style.color = 'white';
  // Modal pop-up
  const modal = document.createElement('div');
  modal.className = 'block';
  // "Get the numbers & early access" TEXT
  const pitchBox = document.createElement('div');
  pitchBox.className = 'block';
  pitchBox.style.paddingTop = '10vh';
  pitchBox.style.paddingBottom = '10vh';
  const pitchText = document.createElement('h1');
  pitchText.textContent = 'Get the numbers & early access!';
  pitchText.style.borderBottom = '0.3vh solid white';
  pitchText.style.fontVariant = 'small-caps';
  pitchText.style.color = 'white';
  pitchText.style.letterSpacing = '0.5vw';
  pitchText.className = 'title is-1';
  pitchText.classList.add('animated', 'fadeInLeft', 'slow');
  pitchBox.appendChild(pitchText);
  modal.appendChild(pitchBox);
  modal.appendChild(renderModal());
  const secondOneArray = [modal, become, borrower, or, lender];
  secondOneArray.forEach(el => secondArray[0].appendChild(el));
  secondOneArray.forEach((el) => {
    const divs = el;
    divs.style.width = '30%';
    divs.style.height = '20vh';
    divs.style.display = 'flex';
    divs.style.flexDirection = 'column';
    divs.style.justifyContent = 'center';
    divs.style.alignItems = 'center';
  });
  // Modal
  secondOneArray[0].style.width = '100vw';
  secondOneArray[0].style.height = '56.25vh';
  secondOneArray[0].style.marginTop = '7vh';
  secondOneArray[0].style.zIndex = '5';
  secondOneArray[0].style.backgroundColor = 'rgb(54, 54, 54, 0.9)';
  secondOneArray[0].style.display = 'none';
  secondOneArray[0].style.justifyContent = 'flex-start';
  // Become text
  secondOneArray[1].style.width = '75vw';
  secondOneArray[1].style.height = '10vh';
  // Borrower div
  secondOneArray[2].style.boxShadow = '0 2px 25px rgba(54, 54, 54, 1)';
  secondOneArray[2].innerText = 'BORROWER';
  secondOneArray[2].style.fontSize = '3vw';
  secondOneArray[2].style.fontWeight = 'bolder';
  // OR
  secondOneArray[3].style.color = '#417505';
  secondOneArray[3].style.fontWeight = 'bolder';
  // Lender div
  secondOneArray[4].style.boxShadow = '0 2px 25px rgba(54, 54, 54, 1)';
  secondOneArray[4].innerText = 'LENDER';
  secondOneArray[4].style.fontSize = '3vw';
  secondOneArray[4].style.fontWeight = 'bolder';
  // SECOND SLIDE
  secondArray.className = 'block';
  secondArray[1].style.height = '56.25vh';
  secondArray[1].style.backgroundColor = 'transparent';
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
  const backButton = document.createElement('button');
  backButton.className = 'button is-dark';
  backButton.textContent = 'Back';
  const secondTwoArray = [howMuch, input, pay, weekOne, weekTwo, month, backButton];
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
  // Back Button
  secondTwoArray[6].style.width = '5vw';
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
setInterval(check, 500);
// Enter email pop-up
const triggerModal = () => {
  const modal = document.querySelector('#second').firstChild.firstChild;
  const borrower = document.querySelector('#second').firstChild.childNodes[2];
  const lender = document.querySelector('#second').firstChild.childNodes[4];
  const blArray = [borrower, lender];
  blArray.forEach((el) => {
    el.addEventListener('click', (e) => {
      if (check() !== false) {
        modal.style.display = 'flex';
        modal.style.position = 'absolute';
        modal.classList.add('animated', 'fadeInDown');
      }
      // Create an instance of the button's text
      this.path = e.target.innerText;
    });
  });
};
triggerModal();
// Helper function to remove specified characters from given string
const filterStr = (filter, str) => {
  const reg = new RegExp(filter);
  return str.replace(reg, '').toLowerCase();
};
// Toggle second slide after submitting email
const switchSlide = () => {
  const lock = document.querySelector('#second').firstChild.childNodes[1].firstChild.firstChild;
  const firstSlide = document.querySelector('#second').firstChild;
  const secondSlide = document.querySelector('#second').lastChild;
  const backButton = document.querySelector('#second').lastChild.lastChild;
  const howMuchText = document.querySelector('#second').lastChild.firstChild.firstChild;
  const numInput = document.querySelector('#second').lastChild.childNodes[1].firstChild.firstChild.firstChild;
  const pay = document.querySelector('#second').lastChild.childNodes[2];
  const weekOne = document.querySelector('#second').lastChild.childNodes[3];
  const weekTwo = document.querySelector('#second').lastChild.childNodes[4];
  const month = document.querySelector('#second').lastChild.childNodes[5];
  lock.addEventListener('animationend', setTimeout(() => {
    if (check() !== true) {
      firstSlide.style.display = 'none';
      secondSlide.style.display = 'flex';
      howMuchText.textContent = `How much would you like to ${filterStr('ER', this.path)}?`;
      howMuchText.style.fontVariant = 'small-caps';
      howMuchText.style.paddingTop = '5vh';
      howMuchText.style.borderBottom = '0.3vh solid black';
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
// Toggle between first and second slide
const toggleSlides = () => {
  const borrower = document.querySelector('#second').firstChild.childNodes[2];
  const lender = document.querySelector('#second').firstChild.childNodes[4];
  const blArray = [borrower, lender];
  const firstSlide = document.querySelector('#second').firstChild;
  const secondSlide = document.querySelector('#second').lastChild;
  const backButton = document.querySelector('#second').lastChild.lastChild;
  const howMuchText = document.querySelector('#second').lastChild.firstChild.firstChild;
  const numInput = document.querySelector('#second').lastChild.childNodes[1].firstChild.firstChild.firstChild;
  const pay = document.querySelector('#second').lastChild.childNodes[2];
  const weekOne = document.querySelector('#second').lastChild.childNodes[3];
  const weekTwo = document.querySelector('#second').lastChild.childNodes[4];
  const month = document.querySelector('#second').lastChild.childNodes[5];
  // Populate second slide based on which path was clicked on
  if (check() !== true) {
    blArray.forEach((el) => {
      el.addEventListener('click', (e) => {
        firstSlide.style.display = 'none';
        secondSlide.style.display = 'flex';
        howMuchText.textContent = `How much would you like to ${filterStr('ER', e.target.innerText)}?`;
        howMuchText.style.fontVariant = 'small-caps';
        howMuchText.style.paddingTop = '5vh';
        howMuchText.style.borderBottom = '0.3vh solid black';
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
setInterval(toggleSlides, 1000);
// Helper function to asure user is entering an email
const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// Toggle email validity indicator
const emailIsValid = () => {
  const modal = document.querySelector('#second').firstChild.firstChild;
  const input = modal.lastChild.firstChild.firstChild;
  const icon = modal.lastChild.firstChild.lastChild.firstChild;
  const button = modal.lastChild.lastChild.firstChild;
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
  const input = modal.lastChild.firstChild.firstChild;
  const button = modal.lastChild.lastChild.firstChild;
  input.addEventListener('keypress', (e) => {
    if (validateEmail(input.value) === true && e.keyCode === 13) {
      saveEmail(input.value);
      modal.style.display = 'none';
      lock.classList.add('animated', 'fadeOut');
      lock.addEventListener('animationend', () => {
        lock.classList.replace('fa-lock', 'fa-unlock');
        lock.classList.replace('fadeOut', 'fadeIn');
      });
      switchSlide();
    }
  });
  button.addEventListener('click', () => {
    if (validateEmail(input.value) === true) {
      saveEmail(input.value);
      modal.style.display = 'none';
      lock.classList.add('animated', 'fadeOut');
      lock.addEventListener('animationend', () => {
        lock.classList.replace('fa-lock', 'fa-unlock');
        lock.classList.replace('fadeOut', 'fadeIn');
      });
      switchSlide();
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
  pay.style.width = '40%';
  const weekOne = document.querySelector('#second').lastChild.childNodes[3];
  const weekTwo = document.querySelector('#second').lastChild.childNodes[4];
  const month = document.querySelector('#second').lastChild.childNodes[5];
  input.addEventListener('input', (e) => {
    // eslint-disable-next-line default-case
    switch (filterStr('How much would you like to ', howMuch.innerText)) {
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
          weekOne.classList.add('animated', 'fadeInLeft', 'slower', 'delay-1s');
          weekTwo.classList.add('animated', 'fadeInLeft', 'slower', 'delay-2s');
          month.classList.add('animated', 'fadeInLeft', 'slower', 'delay-3s');
        }
        break;
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
          weekOne.classList.add('animated', 'fadeInLeft', 'slower', 'delay-1s');
          weekTwo.classList.add('animated', 'fadeInLeft', 'slower', 'delay-2s');
          month.classList.add('animated', 'fadeInLeft', 'slower', 'delay-3s');
        }
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
  third.style.height = '30vh';
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
      thirdArray[x].childNodes[y].style.width = '5%';
      thirdArray[x].childNodes[y].style.height = '5%';
      thirdArray[x].childNodes[y].style.display = 'flex';
      thirdArray[x].childNodes[y].style.flexDirection = 'column';
      thirdArray[x].childNodes[y].style.justifyContent = 'center';
      thirdArray[x].childNodes[y].style.alignItems = 'center';
    }
    thirdArray[x].style.width = '33%';
    thirdArray[x].style.height = '25vh';
    thirdArray[x].style.backgroundColor = 'transparent';
    thirdArray[x].style.textAlign = 'center';
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
  calendar.className = 'far fa-calendar-alt fa-2x';
  third.childNodes[0].firstChild.appendChild(calendar);
  const money = document.createElement('i');
  money.className = 'fas fa-dollar-sign fa-2x';
  third.childNodes[1].firstChild.appendChild(money);
  const shield = document.createElement('i');
  shield.className = 'fas fa-shield-alt fa-2x';
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
  calendarTitle.className = 'title is-5';
  third.childNodes[0].childNodes[1].appendChild(calendarTitle);
  const moneyTitle = document.createElement('h2');
  moneyTitle.textContent = 'Earnings';
  moneyTitle.className = 'title is-5';
  third.childNodes[1].childNodes[1].appendChild(moneyTitle);
  const shieldTitle = document.createElement('h2');
  shieldTitle.textContent = 'Security';
  shieldTitle.className = 'title is-5';
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
  calendarInfo.textContent = `Choose the most convenient
  timeframe that works for you.`;
  calendarInfo.className = 'subtitle is-5';
  third.childNodes[0].childNodes[2].appendChild(calendarInfo);
  const moneyInfo = document.createElement('h2');
  moneyInfo.textContent = `Earn interest on your money
  in as little as a week!`;
  moneyInfo.className = 'subtitle is-5';
  third.childNodes[1].childNodes[2].appendChild(moneyInfo);
  const shieldInfo = document.createElement('h2');
  shieldInfo.textContent = `Don't worry, your account is
  secured.`;
  shieldInfo.className = 'subtitle is-5';
  third.childNodes[2].childNodes[2].appendChild(shieldInfo);
};
renderInfo();
// Footer Text
const renderFooter = () => {
  const footer = document.querySelector('#footer');
  const contact = document.createElement('h1');
  const email = document.createElement('a');
  const spotLLC = document.createElement('h1');
  footer.style.width = '100%';
  footer.style.height = '5vh';
  footer.style.display = 'flex';
  footer.style.flexDirection = 'row';
  footer.style.justifyContent = 'space-between';
  contact.textContent = 'Contact - ';
  contact.className = 'title is-6';
  email.href = 'mailto: info@spotme.cloud';
  email.textContent = 'info@spotme.cloud';
  email.style.color = '#7E0032';
  spotLLC.textContent = '© 2019 SpotMe LLC ';
  spotLLC.className = 'title is-6';
  contact.appendChild(email);
  footer.appendChild(contact);
  footer.appendChild(spotLLC);
}
renderFooter();
// Unlocked feature for returning visitors
const unlock = () => {
  if (window.location.href.includes('/calculator')) {
    const lock = document.querySelector('#second').firstChild.childNodes[1].firstChild.firstChild;
    lock.classList.replace('fa-lock', 'fa-unlock');
  }
};
unlock();
// When users visit site on their Phone
const isMobile = () => {
  const mobile = /iPhone|iPad|iPod|Android|BlackBerry|Windows Phone/i.test(navigator.userAgent);
  const iPhone = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  if (mobile === true) {
    const logo = document.querySelector('#first').firstChild;
    const comingSoon = document.querySelector('#first').lastChild;
    const slogan = document.querySelector('section').firstChild.firstChild.childNodes;
    const thirdArray = document.querySelector('#third').childNodes;
    const modal = document.querySelector('#second').firstChild.firstChild;
    const modalText = document.querySelector('#second').firstChild.firstChild.firstChild.firstChild;
    const howMuchText = document.querySelector('#second').lastChild.firstChild.firstChild;
    const input = document.querySelector('#second').lastChild.childNodes[1];
    const repaymentText = document.querySelector('#second').lastChild.childNodes[2];
    const resultOne = document.querySelector('#second').lastChild.childNodes[3];
    const resultTwo = document.querySelector('#second').lastChild.childNodes[4];
    const resultThree = document.querySelector('#second').lastChild.childNodes[5];
    const button = document.querySelector('#second').lastChild.lastChild;
    const footer = document.querySelector('#footer').childNodes;
    logo.style.width = '40vw';
    logo.style.height = '25vh';
    comingSoon.style.width = '50vw';
    comingSoon.style.fontSize = '16pt';
    slogan.forEach(el => {
      el.classList.replace('is-1', 'is-4');
    });
    thirdArray.forEach(el => {
      const title = el.childNodes[1].firstChild;
      const titleDiv = el.childNodes[1];
      const text = el.childNodes[2].firstChild;
      title.className = 'title is-5';
      title.style.fontSize = '14pt';
      titleDiv.style.width = '100%';
      titleDiv.style.marginBottom = '4vh';
      titleDiv.style.marginTop = '2vh';
      text.style.fontSize = '9pt';
      text.className = 'subtitle is-6';
    });
    modal.style.backgroundColor = 'rgb(54, 54, 54, 0.9)';
    // Get the numbers Text
    modalText.classList.replace('is-1', 'is-5');
    howMuchText.className = 'title is-7';
    howMuchText.style.fontSize = '10.5pt';
    input.style.width = '50%';
    repaymentText.style.width = '90%';
    resultOne.style.width = '50%';
    resultTwo.style.width = '50%';
    resultThree.style.width = '50%';
    button.style.width = '15vw';
    footer.forEach(el => {
      el.classList.replace('is-6', 'is-7');
    });
  }
  if (iPhone === true) {
    const howMuch = document.querySelector('#second').lastChild.firstChild;
    const input = document.querySelector('#second').lastChild.childNodes[1].firstChild.firstChild.firstChild;
    const pay = document.querySelector('#second').lastChild.childNodes[2];
    const weekOne = document.querySelector('#second').lastChild.childNodes[3];
    const weekTwo = document.querySelector('#second').lastChild.childNodes[4];
    const month = document.querySelector('#second').lastChild.childNodes[5];
    input.addEventListener('onchange', (e) => {
      // eslint-disable-next-line default-case
      switch (filterStr('How much would you like to ', howMuch.innerText)) {
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
            weekOne.classList.add('animated', 'fadeInLeft', 'slower', 'delay-1s');
            weekTwo.classList.add('animated', 'fadeInLeft', 'slower', 'delay-2s');
            month.classList.add('animated', 'fadeInLeft', 'slower', 'delay-3s');
          }
          break;
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
            weekOne.classList.add('animated', 'fadeInLeft', 'slower', 'delay-1s');
            weekTwo.classList.add('animated', 'fadeInLeft', 'slower', 'delay-2s');
            month.classList.add('animated', 'fadeInLeft', 'slower', 'delay-3s');
          }
          break;
        // No Default
      }
    });
  }
};
isMobile();
