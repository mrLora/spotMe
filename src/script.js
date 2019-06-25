/* IMPORTS */
import { render } from './render/render';
import { check } from './functionality/check';
import { triggerModal } from './functionality/modal';
import { toggleSlides } from './functionality/toggle';
import { emailIsValid } from './functionality/validity';
import { save } from './functionality/save';
import { applyCalc } from './functionality/calculations';
import { unlock } from './functionality/unlock';
import { isMobile } from './functionality/mobile';

// Render Page
render();

// Checking for lock status ; locked or unlocked
setInterval(check, 500);

// Modal pop-up once 'BORROWER' or 'LENDER' is clicked
triggerModal();

// Toggle between first and second slide
setInterval(toggleSlides, 1000);

// Toggle email validity indicator
setInterval(emailIsValid, 500);

// Send POST request to express server with inputted email
save();

// Apply necessary calculations based on which path was chosen
applyCalc();

// Unlocked feature for returning visitors
unlock();

// When users visit site on their Phone
isMobile();
