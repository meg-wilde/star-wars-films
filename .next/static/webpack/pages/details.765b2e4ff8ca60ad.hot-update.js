"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/details",{

/***/ "./pages/details.js":
/*!**************************!*\
  !*** ./pages/details.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MyLayout */ \"./components/MyLayout.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Details = (param)=>{\n    let { film } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MyLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Film Details\"\n            }, void 0, false, {\n                fileName: \"/Users/meg.wilde/Documents/Hyperion Dev/Level 3/L03T12/starwars-films-app/pages/details.js\",\n                lineNumber: 6,\n                columnNumber: 5\n            }, undefined),\n            film ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: film.title\n                    }, void 0, false, {\n                        fileName: \"/Users/meg.wilde/Documents/Hyperion Dev/Level 3/L03T12/starwars-films-app/pages/details.js\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Director: \",\n                            film.director\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/meg.wilde/Documents/Hyperion Dev/Level 3/L03T12/starwars-films-app/pages/details.js\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Producer: \",\n                            film.producer\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/meg.wilde/Documents/Hyperion Dev/Level 3/L03T12/starwars-films-app/pages/details.js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Release Date: \",\n                            film.release_date\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/meg.wilde/Documents/Hyperion Dev/Level 3/L03T12/starwars-films-app/pages/details.js\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Opening Crawl: \",\n                            film.opening_crawl\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/meg.wilde/Documents/Hyperion Dev/Level 3/L03T12/starwars-films-app/pages/details.js\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/Users/meg.wilde/Documents/Hyperion Dev/Level 3/L03T12/starwars-films-app/pages/details.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/meg.wilde/Documents/Hyperion Dev/Level 3/L03T12/starwars-films-app/pages/details.js\",\n        lineNumber: 5,\n        columnNumber: 3\n    }, undefined);\n};\n_c = Details;\n//get the film details by getting the id from the index.js page and passing it into the URL\nDetails.getInitialProps = async function(context) {\n    const { id } = context.query;\n    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(\"https://swapi.dev/api/films/\".concat(id, \"/\"));\n    const film = await res.json();\n    console.log(\"Film data fetched: \".concat(film.title));\n    return {\n        film\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Details);\nvar _c;\n$RefreshReg$(_c, \"Details\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kZXRhaWxzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNEM7QUFDTDtBQUV2QyxNQUFNRSxVQUFVO1FBQUMsRUFBRUMsSUFBSSxFQUFFO3lCQUN2Qiw4REFBQ0gsNERBQU1BOzswQkFDTCw4REFBQ0k7MEJBQUc7Ozs7OztZQUNIRCxxQkFDQzs7a0NBRUUsOERBQUNFO2tDQUFJRixLQUFLRyxLQUFLOzs7Ozs7a0NBQ2YsOERBQUNDOzs0QkFBRTs0QkFBV0osS0FBS0ssUUFBUTs7Ozs7OztrQ0FDM0IsOERBQUNEOzs0QkFBRTs0QkFBV0osS0FBS00sUUFBUTs7Ozs7OztrQ0FDM0IsOERBQUNGOzs0QkFBRTs0QkFBZUosS0FBS08sWUFBWTs7Ozs7OztrQ0FDbkMsOERBQUNIOzs0QkFBRTs0QkFBZ0JKLEtBQUtRLGFBQWE7Ozs7Ozs7OzZDQUd2Qyw4REFBQ0o7MEJBQUU7Ozs7Ozs7Ozs7Ozs7S0FiSEw7QUFrQk4sMkZBQTJGO0FBQzNGQSxRQUFRVSxlQUFlLEdBQUcsZUFBZ0JDLE9BQU87SUFDL0MsTUFBTSxFQUFFQyxFQUFFLEVBQUUsR0FBR0QsUUFBUUUsS0FBSztJQUM1QixNQUFNQyxNQUFNLE1BQU1mLHlEQUFLQSxDQUFDLCtCQUFrQyxPQUFIYSxJQUFHO0lBQzFELE1BQU1YLE9BQU8sTUFBTWEsSUFBSUMsSUFBSTtJQUUzQkMsUUFBUUMsR0FBRyxDQUFDLHNCQUFpQyxPQUFYaEIsS0FBS0csS0FBSztJQUU1QyxPQUFPO1FBQ0xIO0lBQ0Y7QUFDRjtBQUVBLCtEQUFlRCxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2RldGFpbHMuanM/N2MzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL015TGF5b3V0XCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xuXG5jb25zdCBEZXRhaWxzID0gKHsgZmlsbSB9KSA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPGgxPkZpbG0gRGV0YWlsczwvaDE+XG4gICAge2ZpbG0gPyAoXG4gICAgICA8PlxuICAgICAgICB7LyogcmVuZGVyIHRoZSBmaWxtIGRldGFpbHMgKi99XG4gICAgICAgIDxoMj57ZmlsbS50aXRsZX08L2gyPlxuICAgICAgICA8cD5EaXJlY3Rvcjoge2ZpbG0uZGlyZWN0b3J9PC9wPlxuICAgICAgICA8cD5Qcm9kdWNlcjoge2ZpbG0ucHJvZHVjZXJ9PC9wPlxuICAgICAgICA8cD5SZWxlYXNlIERhdGU6IHtmaWxtLnJlbGVhc2VfZGF0ZX08L3A+XG4gICAgICAgIDxwPk9wZW5pbmcgQ3Jhd2w6IHtmaWxtLm9wZW5pbmdfY3Jhd2x9PC9wPlxuICAgICAgPC8+XG4gICAgKSA6IChcbiAgICAgIDxwPkxvYWRpbmcuLi48L3A+XG4gICAgKX1cbiAgPC9MYXlvdXQ+XG4pO1xuXG4vL2dldCB0aGUgZmlsbSBkZXRhaWxzIGJ5IGdldHRpbmcgdGhlIGlkIGZyb20gdGhlIGluZGV4LmpzIHBhZ2UgYW5kIHBhc3NpbmcgaXQgaW50byB0aGUgVVJMXG5EZXRhaWxzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gIGNvbnN0IHsgaWQgfSA9IGNvbnRleHQucXVlcnk7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL3N3YXBpLmRldi9hcGkvZmlsbXMvJHtpZH0vYCk7XG4gIGNvbnN0IGZpbG0gPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIGNvbnNvbGUubG9nKGBGaWxtIGRhdGEgZmV0Y2hlZDogJHtmaWxtLnRpdGxlfWApO1xuXG4gIHJldHVybiB7XG4gICAgZmlsbSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERldGFpbHM7XG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiZmV0Y2giLCJEZXRhaWxzIiwiZmlsbSIsImgxIiwiaDIiLCJ0aXRsZSIsInAiLCJkaXJlY3RvciIsInByb2R1Y2VyIiwicmVsZWFzZV9kYXRlIiwib3BlbmluZ19jcmF3bCIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJpZCIsInF1ZXJ5IiwicmVzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/details.js\n"));

/***/ })

});