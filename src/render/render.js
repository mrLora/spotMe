/* DIVIDER */

// Background
const addBackground = () => {

  const body = document.querySelector('body');
  body.style.backgroundImage = "url('./images/white.jpg')";
  body.style.backgroundSize = 'cover';
  body.style.backgroundRepeat = 'no-repeat';
  
};

// Rendering AND Styling
const renderDivider = () => {

  const divider = document.querySelector('.divider');
  divider.style.width = '100vw';
  divider.style.height = '10vh';

};

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

/* FIRST CONTAINER */

// Rendering & Styling
const renderFirst = () => {

  const first = document.querySelector('#first');
  first.style.display = 'flex';
  first.style.flexDirection = 'row';
  first.style.justifyContent = 'space-between';

};

// Adding divs for the logo, coming soon, and an about-me
const renderFirstChildren = () => {

  const first = document.querySelector('#first');

  const logo = document.createElement('div');
  logo.id = 'logo';

  const img = document.createElement('img');
  img.src = './images/logo.png';
  img.style.paddingRight = '10vw';

  logo.appendChild(img);

  const comingSoon = document.createElement('div');
  comingSoon.className = 'block';
  comingSoon.id = 'coming-soon';

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

/* SECOND CONTAINER */

// Rendering AND Styling
const renderSecond = () => {

  const second = document.querySelector('#second');
  second.style.display = 'flex';
  second.style.flexDirection = 'column';
  second.style.justifyContent = 'space-evenly';

};

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
  input.id = 'email-input';

  const spanOne = document.createElement('span');
  spanOne.className = 'icon is-small is-left';

  const iconOne = document.createElement('i');
  iconOne.className = 'fas fa-envelope';

  const spanTwo = document.createElement('span');
  spanTwo.className = 'icon is-small is-right';

  const iconTwo = document.createElement('i');
  iconTwo.className = 'fas fa-exclamation-triangle';
  iconTwo.id = 'exclamation-icon';

  const controlTwo = document.createElement('div');
  controlTwo.className = 'control buttons are-medium';

  const button = document.createElement('button');
  button.type = 'submit';
  button.className = 'button is-success';
  button.innerText = 'Early-Access';
  button.id = 'email-button';

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
  lock.id = 'lock';

  const symbol = document.createElement('i');
  symbol.className = 'fas fa-lock fa-2x';
  symbol.id = 'symbol';

  lock.appendChild(symbol);

  become.appendChild(lock);

  become.appendChild(becomeText);

  // BORROWER Div(button) -LEFT
  const borrower = document.createElement('div');
  borrower.className = 'button is-dark is-rounded';
  borrower.style.backgroundColor = '#7E0032';
  borrower.style.color = 'white';
  borrower.id = 'borrower';

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
  lender.id = 'lender';

  // Modal pop-up
  const modal = document.createElement('div');
  modal.className = 'block';
  modal.id = 'modal';

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
  pitchText.id = 'modal-text';

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
  howMuchText.id = 'how-much';
  howMuch.appendChild(howMuchText);

  const input = document.createElement('div');
  input.className = 'block';

  const field = document.createElement('div');
  field.className = 'field';

  const control = document.createElement('div');
  control.className = 'control has-icons-left';

  const numInput = document.createElement('input');
  numInput.className = 'input is-success';
  numInput.id = 'num-input';
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
  weekOne.id = 'week-one';

  const weekTwo = document.createElement('h2');
  weekTwo.className = 'subtitle';
  weekTwo.id = 'week-two';

  const month = document.createElement('h2');
  month.className = 'subtitle';
  month.id = 'month';

  const pay = document.createElement('h1');
  pay.className = 'subtitle';
  pay.id = 'pay';

  const backButton = document.createElement('button');
  backButton.className = 'button is-dark';
  backButton.textContent = 'Back';
  backButton.id = 'back';

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

/* THIRD CONTAINER */
const renderThird = () => {

  const third = document.querySelector('#third');
  third.style.width = '100vw';
  third.style.height = '30vh';
  third.style.display = 'flex';
  third.style.flexDirection = 'row';
  third.style.justifyContent = 'center';

};

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

};

const render = () => {

  addBackground();
  renderDivider();
  renderSection();
  renderFirst();
  renderFirstChildren();
  renderSecond();
  renderSecondChildren();
  renderThird();
  renderThirdChildren();
  renderIcons();
  renderTitles();
  renderInfo();
  renderFooter();

};

export { render }
