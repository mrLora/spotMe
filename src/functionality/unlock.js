// No modal popup for returning visitors
const unlock = () => {

  if (window.location.href.includes('/calculator')) {

    const lockSymbol = document.querySelector('#symbol');
    lockSymbol.classList.replace('fa-lock', 'fa-unlock');

  }

};

export { unlock }
