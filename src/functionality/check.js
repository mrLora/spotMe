// Check to see if the lock icon is locked or unlocked
const check = () => {

  const lockSymbol = document.querySelector('#symbol');
  let checker;
  // lock icon is locked
  if (lockSymbol.classList.contains('fa-lock')) checker = true;
  // lock icon is unlocked
  else checker = false;
  
  return checker;

};

export { check }
