// const body = document.querySelector('body');
// body.style.display = 'flex';
// body.style.flexDirection = 'column';

/* FIRST CONTAINER */

const first = document.querySelector('#first');
first.style.width = '100vw';
first.style.height = '40vh';
first.style.display = 'flex';
first.style.flexDirection = 'row';
first.style.justifyContent = 'space-around';
// Adding divs for the logo, slogan, and an about-me
const logo = document.createElement('div');
const slogan = document.createElement('div');
const about = document.createElement('div');
const firstArray = [logo, slogan, about];
firstArray.forEach(el => first.appendChild(el));
// logoDiv.style.backgroundImage = 'url(./images/logo.png)';
firstArray[0].style.backgroundColor = 'lightcoral';
firstArray[0].style.width = '30%';
firstArray[0].style.height = '40vh';
firstArray[1].style.backgroundColor = 'lightslategray';
firstArray[1].style.width = '30%';
firstArray[1].style.height = '40vh';
firstArray[2].style.backgroundColor = 'lightpink';
firstArray[2].style.width = '30%';
firstArray[2].style.height = '40vh';

/* SECOND CONTAINER */

const second = document.querySelector('#second');
second.style.backgroundcolor = 'black';
second.style.width = '100vw';
second.style.height = '80vh';
second.style.display = 'flex';
// Second container will serve two interactive slides
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
const becomeText = document.createElement('div');
const borrower = document.createElement('div');
const lender = document.createElement('div');
const secondOneArray = [becomeText, borrower, lender];
secondOneArray.forEach(el => secondArray[0].appendChild(el));
secondOneArray[0].style.width = '75%';
secondOneArray[0].style.height = '10vh';
secondOneArray[0].style.backgroundColor = 'red';
secondOneArray[1].style.width = '30%';
secondOneArray[1].style.height = '60vh';
secondOneArray[1].style.backgroundColor = 'blue';
secondOneArray[2].style.width = '30%';
secondOneArray[2].style.height = '60vh';
secondOneArray[2].style.backgroundColor = 'green';
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
numInput.type = 'number';
numInput.placeholder = 'Enter amount';
const button = document.createElement('button');
const oneWeek = document.createElement('p');
oneWeek.textContent = 'Week 1:';
const twoWeek = document.createElement('p');
twoWeek.textContent = 'Week 2:';
const oneMonth = document.createElement('p');
oneMonth.textContent = 'First Month:';
const secondTwoArray = [howMuchText, numInput, button, oneWeek, twoWeek, oneMonth];
secondTwoArray.forEach(el => secondArray[1].appendChild(el));
secondTwoArray[0].style.width = '75%';
secondTwoArray[0].style.height = '15vh';
secondTwoArray[0].style.backgroundColor = 'orange';
secondTwoArray[1].style.width = '25%';
secondTwoArray[1].style.height = '5vh';
secondTwoArray[2].style.width = '5%';
secondTwoArray[2].style.height = '3vh';
secondTwoArray[3].style.width = '25%';
secondTwoArray[3].style.height = '10vh';
secondTwoArray[4].style.width = '25%';
secondTwoArray[4].style.height = '10vh';
secondTwoArray[5].style.width = '25%';
secondTwoArray[5].style.height = '10vh';

/* THIRD CONTAINER */

const third = document.querySelector('#third');
third.style.width = '100vw';
third.style.height = '50vh';
third.style.backgroundColor = 'purple';
third.style.display = 'flex';
third.style.flexDirection = 'row';
third.style.justifyContent = 'center';
// Adding three small containers EACH containing
// small logo, text/title, and description
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
