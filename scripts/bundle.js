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

/***/ "./scripts/btns.js":
/*!*************************!*\
  !*** ./scripts/btns.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"audio\": () => (/* binding */ audio),\n/* harmony export */   \"create_btn_events\": () => (/* binding */ create_btn_events)\n/* harmony export */ });\n/* harmony import */ var _volume_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./volume_bar */ \"./scripts/volume_bar.js\");\n\r\nvar audio;\r\n\r\nfunction create_btn_events(surahs) {\r\n    const playlist = [...document.querySelectorAll('.surah')];\r\n    playlist.forEach(surah => {\r\n        const btn = surah.querySelector('.play-btn');\r\n        btn.addEventListener('click', () => {\r\n            let current = document.querySelector('.surah.active');\r\n            if (current && current.dataset.id != surah.dataset.id) deactivate(current)\r\n\r\n\r\n            if (surah.classList.contains('active') && btn.attributes.getNamedItem('src').value == './images/pause.svg') {\r\n                audio.pause();\r\n                btn.setAttribute('src', './images/play.svg');\r\n                return\r\n            }\r\n            if(!audio || audio.src != surahs[surah.dataset.id].url){\r\n                audio = new Audio(surahs[surah.dataset.id].url);\r\n                audio.volume = (0,_volume_bar__WEBPACK_IMPORTED_MODULE_0__.get_volume)();\r\n                audio.addEventListener('ended', () => {\r\n                    if(!surah.nextElementSibling) {\r\n                        deactivate(surah) \r\n                        return \r\n                    }\r\n                    surah.nextElementSibling.querySelector('.play-btn').click()\r\n                })\r\n                audio.play()\r\n            \r\n            }\r\n            \r\n            btn.setAttribute('src', './images/pause.svg')\r\n            surah.classList.add('active');\r\n            btn.classList.add('active');\r\n            \r\n            \r\n            let time = audio.currentTime;\r\n            audio.play();\r\n            audio.currentTime = time;\r\n            return \r\n              \r\n        })\r\n    })\r\n}\r\n\r\nfunction deactivate(surah){\r\n    audio.pause()\r\n    const btn = surah.querySelector('.play-btn');\r\n    surah.classList.remove('active');\r\n    btn.classList.remove('active');\r\n    btn.setAttribute('src','./images/play.svg');\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://quran-player/./scripts/btns.js?");

/***/ }),

/***/ "./scripts/progress_bar.js":
/*!*********************************!*\
  !*** ./scripts/progress_bar.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"time_skip\": () => (/* binding */ time_skip)\n/* harmony export */ });\n/* harmony import */ var _btns_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./btns.js */ \"./scripts/btns.js\");\n\r\nfunction time_skip() {\r\n    const bar = document.querySelector('.progress-bar');\r\n    bar.addEventListener('click', (e) => {\r\n        if (!_btns_js__WEBPACK_IMPORTED_MODULE_0__.audio) return ;\r\n        _btns_js__WEBPACK_IMPORTED_MODULE_0__.audio.currentTime =  _btns_js__WEBPACK_IMPORTED_MODULE_0__.audio.duration * (e.pageX / window.innerWidth);\r\n    })\r\n}\r\n\n\n//# sourceURL=webpack://quran-player/./scripts/progress_bar.js?");

/***/ }),

/***/ "./scripts/script.js":
/*!***************************!*\
  !*** ./scripts/script.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _surahs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./surahs.js */ \"./scripts/surahs.js\");\n/* harmony import */ var _btns_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./btns.js */ \"./scripts/btns.js\");\n/* harmony import */ var _progress_bar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./progress_bar.js */ \"./scripts/progress_bar.js\");\n/* harmony import */ var _volume_bar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./volume_bar.js */ \"./scripts/volume_bar.js\");\n\r\n\r\n\r\n\r\n(0,_surahs_js__WEBPACK_IMPORTED_MODULE_0__.create_surahs)()\r\n\r\n;(0,_btns_js__WEBPACK_IMPORTED_MODULE_1__.create_btn_events)(_surahs_js__WEBPACK_IMPORTED_MODULE_0__.surahs)\r\n\r\n;(0,_volume_bar_js__WEBPACK_IMPORTED_MODULE_3__.volume_bar)()\r\n\r\nsetInterval(() => {\r\n    if (!_btns_js__WEBPACK_IMPORTED_MODULE_1__.audio) return\r\n    let loading_bar = document.querySelector('.inner-bar')\r\n    loading_bar.style.width = (_btns_js__WEBPACK_IMPORTED_MODULE_1__.audio.currentTime / _btns_js__WEBPACK_IMPORTED_MODULE_1__.audio.duration) * 100 + '%'\r\n},300)\r\n;(0,_progress_bar_js__WEBPACK_IMPORTED_MODULE_2__.time_skip)()\r\n\r\n\r\n\n\n//# sourceURL=webpack://quran-player/./scripts/script.js?");

/***/ }),

/***/ "./scripts/surahs.js":
/*!***************************!*\
  !*** ./scripts/surahs.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"create_surahs\": () => (/* binding */ create_surahs),\n/* harmony export */   \"surahs\": () => (/* binding */ surahs)\n/* harmony export */ });\nconst path = {\r\n    join(...args){\r\n        let res = ``;\r\n        for (let s of arguments){\r\n            res += s\r\n        }\r\n        return res\r\n    }\r\n}\r\nconst BASE = `../quran/`;\r\npath.join(BASE,`Surat_Al-'Alaq.mp3`)\r\n\r\n\r\nconst surahs = [\r\n    {\r\n        id: 0,\r\n        name: `Surat Al-'Alaq`,\r\n        number: 96,\r\n        duration: '1:10',\r\n        reciter: `Abdur-Rahman as-Sudais`,\r\n        url: path.join(BASE,`Surat_`,`Al-'Alaq.mp3`)\r\n    },\r\n    {\r\n        id: 1,\r\n        name: `Surat Al-'Asr`,\r\n        number: 103,\r\n        duration: '0:25',\r\n        reciter: `Abdur-Rahman as-Sudais`,\r\n        url: path.join(BASE,`Surat_`,`Al-'Asr.mp3`)\r\n    },\r\n    {\r\n        id: 2,\r\n        name: `Surat Al-Mulk`,\r\n        number: 67,\r\n        duration: '5:57',\r\n        reciter: `Abdur-Rahman as-Sudais`,\r\n        url: path.join(BASE,`Surat_`,`Al-Mulk.mp3`)\r\n    },\r\n    {\r\n        id: 3,\r\n        name: `Surat Al-Muzzammil`,\r\n        number: 72,\r\n        duration: '3:23',\r\n        reciter: `Abdur-Rahman as-Sudais`,\r\n        url: path.join(BASE,`Surat_`,`Al-Muzzammil.mp3`)\r\n    },\r\n    {\r\n        id: 4,\r\n        name: `Surat Al-Qalam`,\r\n        number: 68,\r\n        duration: '5:40',\r\n        reciter: `Abdur-Rahman as-Sudais`,\r\n        url: path.join(BASE,`Surat_`,`Al-Qalam.mp3`)\r\n    },\r\n    {\r\n        id: 5,\r\n        name: `Surat Al-Qiyamah`,\r\n        number: 75,\r\n        duration: '2:40',\r\n        reciter: `Abdur-Rahman as-Sudais`,\r\n        url: path.join(BASE,`Surat_`,`Al-Qiyamah.mp3`)\r\n    }\r\n]\r\n\r\nfunction create_surahs() {\r\n    surahs.forEach(surah => {\r\n        let container = document.createElement('div');\r\n        container.classList.add('surah');\r\n        container.setAttribute('data-id',surah.id);\r\n        container.innerHTML = `<img class=\"play-btn\" src=\"./images/play.svg\" alt=\"\">\r\n        <div class=\"info\">\r\n            <h3 class=\"surah-name\">${surah.name} (${surah.number})</h3>\r\n            <p class=\"reciter\">${surah.reciter}</p>\r\n        </div>\r\n        <p class=\"duration\">${surah.duration}</p>`;\r\n        document.querySelector('.surahs').appendChild(container)\r\n    })\r\n}\r\n\r\n\n\n//# sourceURL=webpack://quran-player/./scripts/surahs.js?");

/***/ }),

/***/ "./scripts/volume_bar.js":
/*!*******************************!*\
  !*** ./scripts/volume_bar.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"get_volume\": () => (/* binding */ get_volume),\n/* harmony export */   \"volume_bar\": () => (/* binding */ volume_bar)\n/* harmony export */ });\n/* harmony import */ var _btns_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./btns.js */ \"./scripts/btns.js\");\n\r\n\r\nconst volume_bar = () => {\r\n    const bar = document.querySelector('.volume-slider');\r\n    const unused_bar = document.querySelector('.unused-bar');\r\n    const btn = document.querySelector('.slider-btn');\r\n    let is_sliding = false;\r\n\r\n    btn.addEventListener('mousedown', (e) => {\r\n        btn.classList.add('grabbing');\r\n        let rect = bar.getBoundingClientRect();\r\n        let progress = ((e.clientX - rect.x) / rect.width) * 100 >= 100 ? 100 :\r\n            ((e.clientX - rect.x) / rect.width) * 100 <= 0 ? 0 : ((e.clientX - rect.x) / rect.width) * 100;\r\n        btn.style.left = progress + '%';\r\n        is_sliding = true;\r\n    })\r\n\r\n    btn.addEventListener('mousemove', (e) => {\r\n        if (!is_sliding) return;\r\n        let rect = bar.getBoundingClientRect();\r\n        let progress = ((e.clientX - rect.x) / rect.width) * 100 >= 100 ? 100 :\r\n            ((e.clientX - rect.x) / rect.width) * 100 <= 0 ? 0 : ((e.clientX - rect.x) / rect.width) * 100;\r\n        btn.style.left = progress + '%';\r\n        unused_bar.style.width = 100 - progress + '%';\r\n        if (!_btns_js__WEBPACK_IMPORTED_MODULE_0__.audio) return;\r\n        _btns_js__WEBPACK_IMPORTED_MODULE_0__.audio.volume = get_volume();\r\n    });\r\n\r\n    btn.addEventListener('mouseup', (e) => {\r\n        btn.classList.remove('grabbing');\r\n        if (!is_sliding) return;\r\n        let rect = bar.getBoundingClientRect();\r\n        let progress = ((e.clientX - rect.x) / rect.width) * 100 >= 100 ? 100 :\r\n            ((e.clientX - rect.x) / rect.width) * 100 <= 0 ? 0 : ((e.clientX - rect.x) / rect.width) * 100;\r\n        btn.style.left = progress + '%';\r\n        unused_bar.style.width = 100 - progress + '%';\r\n        if (!_btns_js__WEBPACK_IMPORTED_MODULE_0__.audio) return;\r\n        _btns_js__WEBPACK_IMPORTED_MODULE_0__.audio.volume = get_volume();\r\n    });\r\n\r\n    bar.addEventListener('click', e => {     \r\n        if(is_sliding) {\r\n            is_sliding = false;\r\n            return\r\n        } ;\r\n        let rect = bar.getBoundingClientRect();\r\n        let progress = ((e.clientX - rect.x) / rect.width) * 100 >= 100 ? 100 :\r\n            ((e.clientX - rect.x) / rect.width) * 100 <= 0 ? 0 : ((e.clientX - rect.x) / rect.width) * 100;\r\n        btn.style.left = progress + '%';\r\n        unused_bar.style.width = 100 - progress + '%';\r\n        if (!_btns_js__WEBPACK_IMPORTED_MODULE_0__.audio) return;\r\n        _btns_js__WEBPACK_IMPORTED_MODULE_0__.audio.volume = get_volume();\r\n    });\r\n\r\n\r\n}\r\n\r\n\r\nfunction get_volume() {\r\n    const bar = document.querySelector('.volume-slider');\r\n    const btn = document.querySelector('.slider-btn');\r\n    let bar_rect = bar.getBoundingClientRect();\r\n    let btn_rect = btn.getBoundingClientRect();\r\n    let btn_rect_x = btn_rect.x + (btn_rect.width /2) >= bar_rect.x ? \r\n    btn_rect.x + (btn_rect.width /2): bar_rect.x\r\n    let volume = (btn_rect_x - bar_rect.x) / bar_rect.width;\r\n    return volume\r\n}\r\n\r\n\n\n//# sourceURL=webpack://quran-player/./scripts/volume_bar.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/script.js");
/******/ 	
/******/ })()
;