/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/reservationsModal/fetchResevation.js":
/*!**************************************************!*\
  !*** ./src/reservationsModal/fetchResevation.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FetchReservations)
/* harmony export */ });
class FetchReservations {
    constructor() {
      this.mealID = 0;
    }
  
    async fetchReservationsData() {
      const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/XTyHQABn3ej42SK28nbc/reservations?item_id=item${this.mealID}`;
      try {
        const response = await fetch(url);
        const result = await response.json();
        return result;
      } catch (error) {
        return null;
      }
    }
  }
  

/***/ }),

/***/ "./src/reservationsModal/pullMeal.js":
/*!*******************************************!*\
  !*** ./src/reservationsModal/pullMeal.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PullMealData)
/* harmony export */ });
class PullMealData {
  constructor() {
    this.url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?';
  }

  async fetchMealsData(id) {
    try {
      const response = await fetch(this.url + `i=${id}`);
      if (!response.ok) {
        throw new Error('Error in fetching data');
      }
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************************************!*\
  !*** ./src/reservationsModal/reservations.js ***!
  \***********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Reservations)
/* harmony export */ });
/* harmony import */ var _pullMeal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pullMeal.js */ "./src/reservationsModal/pullMeal.js");
/* harmony import */ var _fetchResevation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchResevation.js */ "./src/reservationsModal/fetchResevation.js");



class Reservations {
  constructor() {
    this.body = document.querySelector('body');
    this.viewReservationsBtns =
      document.getElementsByClassName('viewReservations');
    this.fetchReservations = new _fetchResevation_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.showReservations();
  }

  async createReservationsModal(index) {
    const getMealsDetails = new _pullMeal_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    const mealsDetails = await getMealsDetails.fetchMealsData('52772');
    console.log(mealsDetails.meals[0]);
    console.log(mealsDetails.strMeal);
    const reservationsSection = document.createElement('section');
    reservationsSection.className = 'reservationsSection';
    reservationsSection.innerHTML = `
    <div class="reservationsContainer">
      <p class="close-icon"><span class="material-symbols-outlined">close</span></p>
      <div class="mealDescription">
        <img class="mealImage" src="${mealsDetails.meals[0].strMealThumb}" width="600" alt="simple">
        <h2 class="mealTitle headings">${mealsDetails.meals[0].strMeal}</h2>
        <div class="mealsDescription"> ${mealsDetails.meals[0].strInstructions}</div>
      </div>  
    </div>`;
    this.body.appendChild(reservationsSection);

    const reservationCloseBtns = document.querySelectorAll('.close-icon');
    this.closeReservationModal(reservationCloseBtns);

    // postReservationData.setupListener();
  }

  closeReservationModal(reservationCloseBtns) {
    this.reservationsSections = document.querySelectorAll(
      '.reservationsSection'
    );
    reservationCloseBtns.forEach((each) => {
      each.addEventListener('click', () => {
        this.reservationsSections.forEach((each) => {
          each.style.display = 'none';
        });
      });
    });
  }

  async displayReservations(index) {
    const fetchReservations = new _fetchResevation_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    fetchReservations.movieID = index;
    const fetchedReservation = await fetchReservations.fetchReservationsData();
    const fetchedReservationArr = Array.from(fetchedReservation);
    const existingReservations = document.querySelectorAll(
      '.existingReservations'
    );

    // Clear existing reservations
    existingReservations.forEach((each) => {
      each.innerHTML = '';
    });
    // this.updateCounter(fetchedReservationArr);

    fetchedReservationArr.forEach((each) => {
      const reservation = document.createElement('p');
      reservation.textContent = `${each.date_start} - ${each.date_end} by ${each.username}`;
      existingReservations.forEach((each) => {
        each.appendChild(reservation);
      });
    });
  }

  showReservations() {
    const btnsArray = Array.from(this.viewReservationsBtns);
    btnsArray.forEach((each, eachindex) => {
      each.addEventListener('click', () => {
        this.createReservationsModal(eachindex);
        this.displayReservations(eachindex);
      });
    });
  }
}

})();

/******/ })()
;
//# sourceMappingURL=reservations.js.map