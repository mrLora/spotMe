/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// const body = document.querySelector('body');\n// body.style.display = 'flex';\n// body.style.flexDirection = 'column';\n\n/* FIRST CONTAINER */\n\n// Rendering AND Styling\nconst renderFirst = () => {\n  const first = document.querySelector('#first');\n  first.style.width = '100vw';\n  first.style.height = '40vh';\n  first.style.display = 'flex';\n  first.style.flexDirection = 'row';\n  first.style.justifyContent = 'space-around';\n};\nrenderFirst();\n// Adding divs for the logo, slogan, and an about-me\nconst renderFirstChildren = () => {\n  const first = document.querySelector('#first');\n  const logo = document.createElement('div');\n  const slogan = document.createElement('div');\n  const firstArray = [logo, slogan];\n  firstArray.forEach(el => first.appendChild(el));\n  // logoDiv.style.backgroundImage = 'url(./images/logo.png)';\n  // Giving all divs in First Container a width and a height\n  firstArray.forEach((el) => {\n    const divs = el;\n    divs.style.width = '30%';\n    divs.style.height = '40vh';\n  });\n  firstArray[0].style.backgroundColor = 'lightcoral';\n  firstArray[1].style.backgroundColor = 'lightslategray';\n};\nrenderFirstChildren();\n\n// Functionality\n// Allows events to be chained to one element\nEventTarget.prototype.addEventListener = (() => {\n  const { addEventListener } = EventTarget.prototype;\n  return function el() {\n    // this refers to the element\n    // this also loses its context inside an arrow funtcion\n    // eslint-disable-next-line prefer-rest-params\n    addEventListener.apply(this, arguments);\n    return this;\n  };\n})();\n// Show/hide between the slogan and about\nconst toggle = () => {\n  const slogan = document.querySelector('#first').lastChild;\n  const button = document.createElement('button');\n  // Toggle slogan/about text\n  slogan.addEventListener('mouseenter', () => {\n    slogan.style.backgroundColor = 'blue';\n    slogan.appendChild(button);\n    // Seamless scroll to interactive slides\n    button.addEventListener('click', () => {\n      console.log('click');\n    });\n  }).addEventListener('mouseleave', () => {\n    slogan.style.backgroundColor = 'lightslategray';\n    slogan.removeChild(button);\n  });\n};\ntoggle();\n\n/* SECOND CONTAINER */\nconst renderSecond = () => {\n  const second = document.querySelector('#second');\n  second.style.backgroundcolor = 'black';\n  second.style.width = '100vw';\n  second.style.height = '80vh';\n  second.style.display = 'flex';\n};\nrenderSecond();\n// Second container will serve two interactive slides\nconst renderSecondChildren = () => {\n  const second = document.querySelector('#second');\n  const secondOne = document.createElement('div');\n  const secondTwo = document.createElement('div');\n  const secondArray = [secondOne, secondTwo];\n  secondArray.forEach(el => second.appendChild(el));\n  // FIRST SLIDE\n  secondArray[0].style.flex = '1';\n  secondArray[0].style.backgroundColor = 'yellow';\n  secondArray[0].style.display = 'flex';\n  secondArray[0].style.flexDirection = 'row';\n  secondArray[0].style.justifyContent = 'center';\n  secondArray[0].style.justifyContent = 'space-evenly';\n  secondArray[0].style.flexWrap = 'wrap';\n  // Adding text and two clickable divs/buttons\n  const modal = document.createElement('div');\n  const becomeText = document.createElement('div');\n  const borrower = document.createElement('div');\n  const lender = document.createElement('div');\n  const secondOneArray = [modal, becomeText, borrower, lender];\n  secondOneArray.forEach(el => secondArray[0].appendChild(el));\n  secondOneArray.forEach((el) => {\n    const divs = el;\n    divs.style.width = '30%';\n    divs.style.height = '60vh';\n    divs.style.display = 'flex';\n    divs.style.flexDirection = 'column';\n    divs.style.justifyContent = 'center';\n    divs.style.alignItems = 'center';\n  });\n  // Modal\n  secondOneArray[0].style.width = '100vw';\n  secondOneArray[0].style.height = '80vh';\n  secondOneArray[0].style.zIndex = '5';\n  secondOneArray[0].style.backgroundColor = 'grey';\n  secondOneArray[0].style.display = 'none';\n  // Become text\n  secondOneArray[1].style.width = '75%';\n  secondOneArray[1].style.height = '10vh';\n  secondOneArray[1].style.backgroundColor = 'red';\n  secondOneArray[1].innerText = 'Become a: (Pick One)';\n  // Borrower div\n  secondOneArray[2].style.backgroundColor = 'blue';\n  secondOneArray[2].innerText = 'BORROWER';\n  // Lender div\n  secondOneArray[3].style.backgroundColor = 'green';\n  secondOneArray[3].innerText = 'LENDER';\n  // SECOND SLIDE\n  secondArray[1].style.flex = '1';\n  secondArray[1].style.backgroundColor = 'violet';\n  secondArray[1].style.display = 'none';\n  secondArray[1].style.flexDirection = 'column';\n  secondArray[1].style.alignItems = 'center';\n  secondArray[1].style.alignItems = 'space-evenly';\n  // Adding text/question, input field, submit button, and three lines for the results\n  const howMuchText = document.createElement('div');\n  const numInput = document.createElement('input');\n  const results = document.createElement('p');\n  numInput.type = 'number';\n  numInput.placeholder = 'Enter amount';\n  const secondTwoArray = [howMuchText, numInput, results];\n  secondTwoArray.forEach(el => secondArray[1].appendChild(el));\n  secondTwoArray.forEach((el) => {\n    const divs = el;\n    divs.style.width = '25%';\n    divs.style.height = '10vh';\n  });\n  // How much text\n  secondTwoArray[0].style.width = '75%';\n  secondTwoArray[0].style.height = '15vh';\n  secondTwoArray[0].style.backgroundColor = 'orange';\n  secondTwoArray[0].style.display = 'flex';\n  secondTwoArray[0].style.justifyContent = 'center';\n  secondTwoArray[0].style.alignItems = 'center';\n  // Number Input\n  secondTwoArray[1].style.width = '25%';\n  secondTwoArray[1].style.height = '5vh';\n};\nrenderSecondChildren();\n\n// Functionality\n// Enter email pop-up\nconst triggerModal = () => {\n  const modal = document.querySelector('#second').firstChild.firstChild;\n  const borrower = document.querySelector('#second').firstChild.childNodes[2];\n  const lender = document.querySelector('#second').firstChild.childNodes[3];\n  const blArray = [borrower, lender];\n  blArray.forEach((el) => {\n    el.addEventListener('mouseover', () => {\n      setTimeout(() => {\n        modal.style.display = 'flex';\n        const text = document.createElement('h1');\n        text.innerText = 'Please Enter Your Email';\n        const form = document.createElement('form');\n        form.action = '/';\n        form.method = 'POST';\n        const emailInput = document.createElement('input');\n        emailInput.type = 'email';\n        emailInput.placeholder = 'Enter your email';\n        const submit = document.createElement('button');\n        form.appendChild(emailInput);\n        form.appendChild(submit);\n        modal.appendChild(text);\n        modal.appendChild(form);\n      }, 1000);\n    });\n  });\n};\ntriggerModal();\n// setInterval(triggerModal, 2000);\n// Helper function to remove specified characters from given string\nconst filterStr = (filter, str) => {\n  const reg = new RegExp(filter);\n  return str.replace(reg, '').toLowerCase();\n};\n// Toggle between first and second slide\nconst switchSlides = () => {\n  const firstSlide = document.querySelector('#second').firstChild;\n  const secondSlide = document.querySelector('#second').lastChild;\n  const backButton = document.createElement('button');\n  const borrower = document.querySelector('#second').firstChild.childNodes[2];\n  const lender = document.querySelector('#second').firstChild.childNodes[3];\n  const howMuch = document.querySelector('#second').lastChild.firstChild;\n  const numInput = document.querySelector('#second').lastChild.childNodes[1];\n  const results = document.querySelector('#second').lastChild.childNodes[2];\n  const blArray = [borrower, lender];\n  // blArray.forEach((el) => {\n  //   // Populate second slide based on which path was clicked on\n  //   el.addEventListener('click', (e) => {\n  //     firstSlide.style.display = 'none';\n  //     secondSlide.style.display = 'flex';\n  //     howMuch.innerText = `How much will you ${filterStr('ER', e.target.innerText)}`;\n  //     secondSlide.appendChild(backButton);\n  //     backButton.addEventListener('click', () => {\n  //       numInput.value = '';\n  //       results.innerText = '';\n  //       secondSlide.style.display = 'none';\n  //       firstSlide.style.display = 'flex';\n  //     });\n  //   });\n  // });\n};\nswitchSlides();\n// Helper function to output numbers that include a comma and the correct float value\nconst filterNum = num => num.toFixed(2).toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',');\n// Apply necessary calculations based on which path was chosen\nconst applyCalc = () => {\n  const secondSlide = document.querySelector('#second').lastChild;\n  const howMuch = document.querySelector('#second').lastChild.firstChild;\n  const numInput = document.querySelector('#second').lastChild.childNodes[1];\n  const results = document.querySelector('#second').lastChild.childNodes[2];\n  numInput.addEventListener('input', () => {\n    // eslint-disable-next-line default-case\n    switch (filterStr('How much will you ', howMuch.innerText)) {\n      case 'borrow':\n        results.innerText = `Repayment time from options\n          1 Week = ${filterNum(numInput.value * 1.00)}\n          2 Weeks = ${filterNum(numInput.value * 2.50)}\n          1 Month = ${filterNum(numInput.value * 6.00)}`;\n        secondSlide.appendChild(results);\n        break;\n      case 'lend':\n        results.innerText = `Repayment time from options\n          1 Week = ${filterNum(numInput.value * 0.75)}\n          2 Weeks = ${filterNum(numInput.value * 1.80)}\n          1 Month = ${filterNum(numInput.value * 4.50)}`;\n        secondSlide.appendChild(results);\n        break;\n      // No Default\n    }\n  });\n};\napplyCalc();\n\n/* THIRD CONTAINER */\n\nconst third = document.querySelector('#third');\nthird.style.width = '100vw';\nthird.style.height = '50vh';\nthird.style.backgroundColor = 'purple';\nthird.style.display = 'flex';\nthird.style.flexDirection = 'row';\nthird.style.justifyContent = 'center';\n// Adding three small containers EACH containing\n// Small logo, text/title, and description\nconst thirdArray = [];\nfor (let i = 0; i <= 2; i += 1) {\n  thirdArray.push(document.createElement('div'));\n}\nfor (let j = 0; j <= thirdArray.length - 1; j += 1) {\n  third.appendChild(thirdArray[j]);\n  thirdArray.forEach(el => el.appendChild(document.createElement('div')));\n}\nfor (let x = 0; x <= thirdArray.length - 1; x += 1) {\n  for (let y = 0; y <= thirdArray.length - 1; y += 1) {\n    thirdArray[x].childNodes[y].style.width = '15%';\n    thirdArray[x].childNodes[y].style.height = '15%';\n    thirdArray[x].childNodes[y].style.backgroundColor = 'pink';\n  }\n  thirdArray[x].style.width = '31%';\n  thirdArray[x].style.height = '50vh';\n  thirdArray[x].style.display = 'flex';\n  thirdArray[x].style.flexDirection = 'column';\n  thirdArray[x].style.justifyContent = 'space-evenly';\n  thirdArray[x].style.alignItems = 'center';\n}\nthirdArray[0].style.backgroundColor = 'black';\nthirdArray[1].style.backgroundColor = 'grey';\nthirdArray[2].style.backgroundColor = 'brown';\n// for (let y = 0; y <= thirdArray.length - 1; y += 1) {\n//   thirdArray[y].childNodes[y].style.width = '15%';\n//   thirdArray[y].childNodes[y].style.height = '15%';\n//   thirdArray[y].childNodes[y].style.backgroundColor = 'pink';\n// }\n// thirdArray[0].childNodes[1].style.width = '15%';\n// thirdArray[0].childNodes[1].style.height = '15%';\n// thirdArray[0].childNodes[1].style.backgroundColor = 'pink';\n\n\n//# sourceURL=webpack:///./src/script.js?");

/***/ })

/******/ });