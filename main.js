/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Widget/Widget.js":
/*!******************************!*\
  !*** ./src/Widget/Widget.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Widget; }
/* harmony export */ });
class Widget {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.element = parentEl.querySelector('.common-container');

    this.onBtnClick = this.onBtnClick.bind(this);
  }

  static get markup() {
    return `
    <div class="container">
      <button class="button" type="button">Click to toggle popover</button>
    </div>
    `;
  }

  static get button() {
    return '.button';
  }

  static get popup() {
    return '.popup';
  }

  static get selector() {
    return '.container';
  }

  static get tooltip() {
    return `
      <div class="popup hidden">
        <div class="title-container">
          <span class="popup-title">Popover title</span>
        </div>
        <span class="popup-text">Some tooltip here</span>
      </div>
    `;
  }

  bindToDOM() {
    this.parentEl.innerHTML = Widget.markup;

    this.element = this.parentEl.querySelector(Widget.selector);
    this.button = this.element.querySelector(Widget.button);
    this.popup = this.element.querySelector(Widget.popup);

    this.element.addEventListener('click', this.onBtnClick);
  }

  onBtnClick(e) {
    if (!e.target.classList.contains('button')) {
      return;
    }
    if (document.querySelector('.popup')) {
      document.querySelector('.popup').remove();
      return;
    }
    const button = this.parentEl.querySelector('.button');
    const { top, left } = button.getBoundingClientRect();
    document.body.insertAdjacentHTML('afterbegin', Widget.tooltip);
    const popup = document.querySelector('.popup');
    popup.style.top = `${top - 100}px`;
    popup.style.left = `${left + button.offsetWidth / 2 - 120}px`;
    popup.classList.toggle('hidden');
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Widget_Widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Widget/Widget */ "./src/Widget/Widget.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");



const widget = new _Widget_Widget__WEBPACK_IMPORTED_MODULE_0__["default"](document.querySelector('.common-container'));
widget.bindToDOM();

}();
/******/ })()
;
//# sourceMappingURL=main.js.map