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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MyLayout */ \"./components/MyLayout.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Details = (param)=>{\n    let { film } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MyLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Film Details\"\n            }, void 0, false, {\n                fileName: \"/Users/meg.wilde/Documents/Hyperion Dev/Level 3/L03T12/starwars-films-app/pages/details.js\",\n                lineNumber: 6,\n                columnNumber: 5\n            }, undefined),\n            film ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: film.title\n                    }, void 0, false, {\n                        fileName: \"/Users/meg.wilde/Documents/Hyperion Dev/Level 3/L03T12/starwars-films-app/pages/details.js\",\n                        lineNumber: 9,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Director: \",\n                            film.director\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/meg.wilde/Documents/Hyperion Dev/Level 3/L03T12/starwars-films-app/pages/details.js\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Producer: \",\n                            film.producer\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/meg.wilde/Documents/Hyperion Dev/Level 3/L03T12/starwars-films-app/pages/details.js\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Release Date: \",\n                            film.release_date\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/meg.wilde/Documents/Hyperion Dev/Level 3/L03T12/starwars-films-app/pages/details.js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Opening Crawl: \",\n                            film.opening_crawl\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/meg.wilde/Documents/Hyperion Dev/Level 3/L03T12/starwars-films-app/pages/details.js\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Characters:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/meg.wilde/Documents/Hyperion Dev/Level 3/L03T12/starwars-films-app/pages/details.js\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: film.characters.map(async (characterUrl)=>{\n                            const characterRes = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(characterUrl);\n                            const character = await characterRes.json();\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Name: \",\n                                            character.name\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/meg.wilde/Documents/Hyperion Dev/Level 3/L03T12/starwars-films-app/pages/details.js\",\n                                        lineNumber: 21,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Gender: \",\n                                            character.gender\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/meg.wilde/Documents/Hyperion Dev/Level 3/L03T12/starwars-films-app/pages/details.js\",\n                                        lineNumber: 22,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, character.url, true, {\n                                fileName: \"/Users/meg.wilde/Documents/Hyperion Dev/Level 3/L03T12/starwars-films-app/pages/details.js\",\n                                lineNumber: 20,\n                                columnNumber: 15\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/meg.wilde/Documents/Hyperion Dev/Level 3/L03T12/starwars-films-app/pages/details.js\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/Users/meg.wilde/Documents/Hyperion Dev/Level 3/L03T12/starwars-films-app/pages/details.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/meg.wilde/Documents/Hyperion Dev/Level 3/L03T12/starwars-films-app/pages/details.js\",\n        lineNumber: 5,\n        columnNumber: 3\n    }, undefined);\n};\n_c = Details;\nDetails.getInitialProps = async function(context) {\n    const { id } = context.query;\n    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(\"https://swapi.dev/api/films/\".concat(id, \"/\"));\n    const film = await res.json();\n    console.log(\"Film data fetched: \".concat(film.title));\n    return {\n        film\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Details);\nvar _c;\n$RefreshReg$(_c, \"Details\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kZXRhaWxzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNEM7QUFDTDtBQUV2QyxNQUFNRSxVQUFVO1FBQUMsRUFBRUMsSUFBSSxFQUFFO3lCQUN2Qiw4REFBQ0gsNERBQU1BOzswQkFDTCw4REFBQ0k7MEJBQUc7Ozs7OztZQUNIRCxxQkFDQzs7a0NBQ0UsOERBQUNFO2tDQUFJRixLQUFLRyxLQUFLOzs7Ozs7a0NBQ2YsOERBQUNDOzs0QkFBRTs0QkFBV0osS0FBS0ssUUFBUTs7Ozs7OztrQ0FDM0IsOERBQUNEOzs0QkFBRTs0QkFBV0osS0FBS00sUUFBUTs7Ozs7OztrQ0FDM0IsOERBQUNGOzs0QkFBRTs0QkFBZUosS0FBS08sWUFBWTs7Ozs7OztrQ0FDbkMsOERBQUNIOzs0QkFBRTs0QkFBZ0JKLEtBQUtRLGFBQWE7Ozs7Ozs7a0NBQ3JDLDhEQUFDQztrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDQztrQ0FDRVYsS0FBS1csVUFBVSxDQUFDQyxHQUFHLENBQUMsT0FBT0M7NEJBQzFCLE1BQU1DLGVBQWUsTUFBTWhCLHlEQUFLQSxDQUFDZTs0QkFDakMsTUFBTUUsWUFBWSxNQUFNRCxhQUFhRSxJQUFJOzRCQUN6QyxxQkFDRSw4REFBQ0M7O2tEQUNDLDhEQUFDYjs7NENBQUU7NENBQU9XLFVBQVVHLElBQUk7Ozs7Ozs7a0RBQ3hCLDhEQUFDZDs7NENBQUU7NENBQVNXLFVBQVVJLE1BQU07Ozs7Ozs7OytCQUZyQkosVUFBVUssR0FBRzs7Ozs7d0JBSzFCOzs7Ozs7OzZDQUlKLDhEQUFDaEI7MEJBQUU7Ozs7Ozs7Ozs7Ozs7S0F6QkhMO0FBOEJOQSxRQUFRc0IsZUFBZSxHQUFHLGVBQWdCQyxPQUFPO0lBQy9DLE1BQU0sRUFBRUMsRUFBRSxFQUFFLEdBQUdELFFBQVFFLEtBQUs7SUFDNUIsTUFBTUMsTUFBTSxNQUFNM0IseURBQUtBLENBQUMsK0JBQWtDLE9BQUh5QixJQUFHO0lBQzFELE1BQU12QixPQUFPLE1BQU15QixJQUFJVCxJQUFJO0lBRTNCVSxRQUFRQyxHQUFHLENBQUMsc0JBQWlDLE9BQVgzQixLQUFLRyxLQUFLO0lBRTVDLE9BQU87UUFDTEg7SUFDRjtBQUNGO0FBRUEsK0RBQWVELE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGV0YWlscy5qcz83YzNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTXlMYXlvdXRcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5cbmNvbnN0IERldGFpbHMgPSAoeyBmaWxtIH0pID0+IChcbiAgPExheW91dD5cbiAgICA8aDE+RmlsbSBEZXRhaWxzPC9oMT5cbiAgICB7ZmlsbSA/IChcbiAgICAgIDw+XG4gICAgICAgIDxoMj57ZmlsbS50aXRsZX08L2gyPlxuICAgICAgICA8cD5EaXJlY3Rvcjoge2ZpbG0uZGlyZWN0b3J9PC9wPlxuICAgICAgICA8cD5Qcm9kdWNlcjoge2ZpbG0ucHJvZHVjZXJ9PC9wPlxuICAgICAgICA8cD5SZWxlYXNlIERhdGU6IHtmaWxtLnJlbGVhc2VfZGF0ZX08L3A+XG4gICAgICAgIDxwPk9wZW5pbmcgQ3Jhd2w6IHtmaWxtLm9wZW5pbmdfY3Jhd2x9PC9wPlxuICAgICAgICA8aDM+Q2hhcmFjdGVyczo8L2gzPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge2ZpbG0uY2hhcmFjdGVycy5tYXAoYXN5bmMgKGNoYXJhY3RlclVybCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hhcmFjdGVyUmVzID0gYXdhaXQgZmV0Y2goY2hhcmFjdGVyVXJsKTtcbiAgICAgICAgICAgIGNvbnN0IGNoYXJhY3RlciA9IGF3YWl0IGNoYXJhY3RlclJlcy5qc29uKCk7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtjaGFyYWN0ZXIudXJsfT5cbiAgICAgICAgICAgICAgICA8cD5OYW1lOiB7Y2hhcmFjdGVyLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgIDxwPkdlbmRlcjoge2NoYXJhY3Rlci5nZW5kZXJ9PC9wPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvPlxuICAgICkgOiAoXG4gICAgICA8cD5Mb2FkaW5nLi4uPC9wPlxuICAgICl9XG4gIDwvTGF5b3V0PlxuKTtcblxuRGV0YWlscy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoY29udGV4dCkge1xuICBjb25zdCB7IGlkIH0gPSBjb250ZXh0LnF1ZXJ5O1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9zd2FwaS5kZXYvYXBpL2ZpbG1zLyR7aWR9L2ApO1xuICBjb25zdCBmaWxtID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICBjb25zb2xlLmxvZyhgRmlsbSBkYXRhIGZldGNoZWQ6ICR7ZmlsbS50aXRsZX1gKTtcblxuICByZXR1cm4ge1xuICAgIGZpbG0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxzO1xuIl0sIm5hbWVzIjpbIkxheW91dCIsImZldGNoIiwiRGV0YWlscyIsImZpbG0iLCJoMSIsImgyIiwidGl0bGUiLCJwIiwiZGlyZWN0b3IiLCJwcm9kdWNlciIsInJlbGVhc2VfZGF0ZSIsIm9wZW5pbmdfY3Jhd2wiLCJoMyIsInVsIiwiY2hhcmFjdGVycyIsIm1hcCIsImNoYXJhY3RlclVybCIsImNoYXJhY3RlclJlcyIsImNoYXJhY3RlciIsImpzb24iLCJsaSIsIm5hbWUiLCJnZW5kZXIiLCJ1cmwiLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0IiwiaWQiLCJxdWVyeSIsInJlcyIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/details.js\n"));

/***/ })

});