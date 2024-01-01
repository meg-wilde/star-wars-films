"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout */ \"./components/MyLayout.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n//the API uses a different number in the URL than the episode_id\n//to make sure you get the right film URL to pass to the details page\n//extract the last 2 digits from the URL to get the URL ID\nconst extractFilmId = (url)=>{\n    const parts = url.split(\"/\");\n    return parts[parts.length - 2];\n};\nconst Index = (props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MyLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"jsx-4eab5f8cb8fbe0ea\",\n                children: \"Star Wars Films\"\n            }, void 0, false, {\n                fileName: \"/Users/meg.wilde/Documents/Hyperion Dev/Level 3/L03T12/starwars-films-app/pages/index.js\",\n                lineNumber: 15,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"jsx-4eab5f8cb8fbe0ea\" + \" \" + \"film-list\",\n                children: props.films.map((param)=>{\n                    let { film } = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"jsx-4eab5f8cb8fbe0ea\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"jsx-4eab5f8cb8fbe0ea\",\n                                children: [\n                                    film.title,\n                                    \" - \",\n                                    film.release_date\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/meg.wilde/Documents/Hyperion Dev/Level 3/L03T12/starwars-films-app/pages/index.js\",\n                                lineNumber: 20,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/details?id=\".concat(extractFilmId(film.url)),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"jsx-4eab5f8cb8fbe0ea\",\n                                    children: \"See Details\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/meg.wilde/Documents/Hyperion Dev/Level 3/L03T12/starwars-films-app/pages/index.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/meg.wilde/Documents/Hyperion Dev/Level 3/L03T12/starwars-films-app/pages/index.js\",\n                                lineNumber: 23,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, film.episode_id, true, {\n                        fileName: \"/Users/meg.wilde/Documents/Hyperion Dev/Level 3/L03T12/starwars-films-app/pages/index.js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/meg.wilde/Documents/Hyperion Dev/Level 3/L03T12/starwars-films-app/pages/index.js\",\n                lineNumber: 16,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"4eab5f8cb8fbe0ea\",\n                children: \"h1.jsx-4eab5f8cb8fbe0ea{font-size:24px;margin-bottom:20px}.film-list.jsx-4eab5f8cb8fbe0ea{list-style:none;padding:0}.film-item.jsx-4eab5f8cb8fbe0ea{margin-bottom:20px}.film-details.jsx-4eab5f8cb8fbe0ea{background-color:#f4f4f4;padding:10px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.details-button.jsx-4eab5f8cb8fbe0ea{background-color:#0070f3;color:#fff;border:none;padding:8px 12px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;cursor:pointer}.details-button.jsx-4eab5f8cb8fbe0ea:hover{background-color:#0056b3}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/meg.wilde/Documents/Hyperion Dev/Level 3/L03T12/starwars-films-app/pages/index.js\",\n        lineNumber: 14,\n        columnNumber: 3\n    }, undefined);\n_c = Index;\n//get the information to show on the page from the API\nIndex.getInitialProps = async function() {\n    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(\"https://swapi.dev/api/films/\");\n    const data = await res.json();\n    //show the count of results to the console\n    console.log(\"Show data fetched. Count: \".concat(data.results.length));\n    return {\n        films: data.results.map((film)=>({\n                film\n            }))\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNEM7QUFDZjtBQUNVO0FBRXZDLGdFQUFnRTtBQUNoRSxxRUFBcUU7QUFDckUsMERBQTBEO0FBQzFELE1BQU1HLGdCQUFnQixDQUFDQztJQUNyQixNQUFNQyxRQUFRRCxJQUFJRSxLQUFLLENBQUM7SUFDeEIsT0FBT0QsS0FBSyxDQUFDQSxNQUFNRSxNQUFNLEdBQUcsRUFBRTtBQUNoQztBQUVBLE1BQU1DLFFBQVEsQ0FBQ0Msc0JBQ2IsOERBQUNULDREQUFNQTs7MEJBQ0wsOERBQUNVOzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQzswREFBYTswQkFFWEYsTUFBTUcsS0FBSyxDQUFDQyxHQUFHLENBQUM7d0JBQUMsRUFBRUMsSUFBSSxFQUFFO3lDQUN4Qiw4REFBQ0M7OzswQ0FDQyw4REFBQ0M7OztvQ0FDRUYsS0FBS0csS0FBSztvQ0FBQztvQ0FBSUgsS0FBS0ksWUFBWTs7Ozs7OzswQ0FFbkMsOERBQUNqQixrREFBSUE7Z0NBQUNrQixNQUFNLGVBQXVDLE9BQXhCaEIsY0FBY1csS0FBS1YsR0FBRzswQ0FDL0MsNEVBQUNnQjs7OENBQU87Ozs7Ozs7Ozs7Ozt1QkFMSE4sS0FBS08sVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBTjFCYjtBQXdETixzREFBc0Q7QUFDdERBLE1BQU1jLGVBQWUsR0FBRztJQUN0QixNQUFNQyxNQUFNLE1BQU1yQix5REFBS0EsQ0FBQztJQUN4QixNQUFNc0IsT0FBTyxNQUFNRCxJQUFJRSxJQUFJO0lBQzNCLDBDQUEwQztJQUMxQ0MsUUFBUUMsR0FBRyxDQUFDLDZCQUFpRCxPQUFwQkgsS0FBS0ksT0FBTyxDQUFDckIsTUFBTTtJQUU1RCxPQUFPO1FBQ0xLLE9BQU9ZLEtBQUtJLE9BQU8sQ0FBQ2YsR0FBRyxDQUFDLENBQUNDLE9BQVU7Z0JBQUVBO1lBQUs7SUFDNUM7QUFDRjtBQUVBLCtEQUFlTixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9NeUxheW91dFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcblxuLy90aGUgQVBJIHVzZXMgYSBkaWZmZXJlbnQgbnVtYmVyIGluIHRoZSBVUkwgdGhhbiB0aGUgZXBpc29kZV9pZFxuLy90byBtYWtlIHN1cmUgeW91IGdldCB0aGUgcmlnaHQgZmlsbSBVUkwgdG8gcGFzcyB0byB0aGUgZGV0YWlscyBwYWdlXG4vL2V4dHJhY3QgdGhlIGxhc3QgMiBkaWdpdHMgZnJvbSB0aGUgVVJMIHRvIGdldCB0aGUgVVJMIElEXG5jb25zdCBleHRyYWN0RmlsbUlkID0gKHVybCkgPT4ge1xuICBjb25zdCBwYXJ0cyA9IHVybC5zcGxpdChcIi9cIik7XG4gIHJldHVybiBwYXJ0c1twYXJ0cy5sZW5ndGggLSAyXTtcbn07XG5cbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPGgxPlN0YXIgV2FycyBGaWxtczwvaDE+XG4gICAgPHVsIGNsYXNzTmFtZT1cImZpbG0tbGlzdFwiPlxuICAgICAgey8qIG1hcCB0aGUgZmlsbXMgYW5kIGNyZWF0ZSBhIGxpbmsgdG8gb3BlbiB0aGUgZmlsbSBkZXRhaWxzICovfVxuICAgICAge3Byb3BzLmZpbG1zLm1hcCgoeyBmaWxtIH0pID0+IChcbiAgICAgICAgPGxpIGtleT17ZmlsbS5lcGlzb2RlX2lkfT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIHtmaWxtLnRpdGxlfSAtIHtmaWxtLnJlbGVhc2VfZGF0ZX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPExpbmsgaHJlZj17YC9kZXRhaWxzP2lkPSR7ZXh0cmFjdEZpbG1JZChmaWxtLnVybCl9YH0+XG4gICAgICAgICAgICA8YnV0dG9uPlNlZSBEZXRhaWxzPC9idXR0b24+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIH1cblxuICAgICAgLmZpbG0tbGlzdCB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG5cbiAgICAgIC5maWxtLWl0ZW0ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgfVxuXG4gICAgICAuZmlsbS1kZXRhaWxzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5kZXRhaWxzLWJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDcwZjM7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmRldGFpbHMtYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvTGF5b3V0PlxuKTtcblxuLy9nZXQgdGhlIGluZm9ybWF0aW9uIHRvIHNob3cgb24gdGhlIHBhZ2UgZnJvbSB0aGUgQVBJXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9zd2FwaS5kZXYvYXBpL2ZpbG1zL1wiKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIC8vc2hvdyB0aGUgY291bnQgb2YgcmVzdWx0cyB0byB0aGUgY29uc29sZVxuICBjb25zb2xlLmxvZyhgU2hvdyBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGEucmVzdWx0cy5sZW5ndGh9YCk7XG5cbiAgcmV0dXJuIHtcbiAgICBmaWxtczogZGF0YS5yZXN1bHRzLm1hcCgoZmlsbSkgPT4gKHsgZmlsbSB9KSksXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJMaW5rIiwiZmV0Y2giLCJleHRyYWN0RmlsbUlkIiwidXJsIiwicGFydHMiLCJzcGxpdCIsImxlbmd0aCIsIkluZGV4IiwicHJvcHMiLCJoMSIsInVsIiwiZmlsbXMiLCJtYXAiLCJmaWxtIiwibGkiLCJwIiwidGl0bGUiLCJyZWxlYXNlX2RhdGUiLCJocmVmIiwiYnV0dG9uIiwiZXBpc29kZV9pZCIsImdldEluaXRpYWxQcm9wcyIsInJlcyIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInJlc3VsdHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});