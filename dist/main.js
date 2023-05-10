/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI */ \"./src/modules/UI.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", _modules_UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadHomepage);\n\n\n//# sourceURL=webpack://todo-list-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\nclass UI {\n  static loadHomepage() {\n    UI.newTask();\n  }\n\n  static newTask() {\n    const addTaskBtn = document.getElementById(\"add-new-task\");\n    const projectsView = document.querySelector(\".projects-view\");\n    addTaskBtn.addEventListener(\"click\", () => {\n      const taskForm = document.createElement(\"form\");\n      addTaskBtn.classList.add(\"active\");\n      taskForm.setAttribute(\"id\", \"new-task-popup\");\n      taskForm.innerHTML += `\n          <input class=\"input-add-task-popup\"\n            id=\"input-add-task-popup\"\"\n            type=\"text\"\n            placeholder=\"New Quest Name\"\n          />\n          <br>\n          <input class=\"input-date-task-popup\"\n            id=\"input-date-task-popup\"\"\n            type=\"date\"\n          />\n          <fieldset>\n          <legend>How important the quest is ?</legend>\n          <div>\n            <input id=\"input-check-task-popup1\"\n            name=\"importancy\"\n            type=\"radio\"\n            />\n          <label for=\"input-check-task-popup1\"\n            name=\"input-check-task-popup\" \n            value=\"important\">Important</label>\n            <input id=\"input-check-task-popup2\"\n            name=\"importancy\"\n            type=\"radio\"\n          />\n          <label for=\"input-check-task-popup2\"\n            name=\"input-check-task-popup\" \n            value=\"not-important\">It can wait</label>\n          </div>\n          </fieldset>\n          <br>\n          <button type=\"submit\" value=\"submit\">Submit</button>\n          <button type=\"reset\" valuer=\"reset\">Reset</button>\n      \n      `;\n      projectsView.appendChild(taskForm);\n\n      if (addTaskBtn.classList.contains(\"active\")) {\n        addTaskBtn.disabled = true;\n      }\n    });\n  }\n}\n\n\n//# sourceURL=webpack://todo-list-project/./src/modules/UI.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;