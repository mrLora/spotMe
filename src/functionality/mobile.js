// Change sizing to fit a phone's screen
const isMobile = () => {

  const mobile = /iPhone|iPad|iPod|Android|BlackBerry|Windows Phone/i.test(navigator.userAgent);

  if (mobile === true) {

    const logo = document.querySelector('#logo');
    const comingSoon = document.querySelector('#coming-soon');
    const slogan = document.querySelector('section').firstChild.firstChild.childNodes;
    const thirdArray = document.querySelector('#third').childNodes;
    const modal = document.querySelector('#modal');
    const modalText = document.querySelector('#modal-text');
    const howMuchText = document.querySelector('#how-much');
    const input = document.querySelector('#num-input');
    const repaymentText = document.querySelector('#pay');
    const resultOne = document.querySelector('#week-one');
    const resultTwo = document.querySelector('#week-two');
    const resultThree = document.querySelector('#month');
    const button = document.querySelector('#back');
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
    repaymentText.style.fontSize = '13pt';
    repaymentText.style.textAlign = 'center';

    resultOne.style.width = '50%';
    resultOne.style.textAlign = 'center';

    resultTwo.style.width = '50%';
    resultTwo.style.textAlign = 'center';

    resultThree.style.width = '50%';
    resultThree.style.textAlign = 'center';

    button.style.width = '15vw';

    footer.forEach(el => {

      el.classList.replace('is-6', 'is-7');

    });

  }

};

export { isMobile }
