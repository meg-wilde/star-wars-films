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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MyLayout.js */ \"./components/MyLayout.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst Index = (props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Starwars Films\"\n            }, void 0, false, {\n                fileName: \"/Users/meg.wilde/Documents/Hyperion Dev/Level 3/L03T12/starwars-films-app/pages/index.js\",\n                lineNumber: 7,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: props.map((param)=>{\n                    let { film } = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            as: \"/details/\".concat(film.episode.id),\n                            href: \"/details/=\".concat(film.episode.id),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: [\n                                    film.title,\n                                    \" - \",\n                                    film.release_date\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/meg.wilde/Documents/Hyperion Dev/Level 3/L03T12/starwars-films-app/pages/index.js\",\n                                lineNumber: 15,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/meg.wilde/Documents/Hyperion Dev/Level 3/L03T12/starwars-films-app/pages/index.js\",\n                            lineNumber: 11,\n                            columnNumber: 11\n                        }, undefined)\n                    }, film.episode.id, false, {\n                        fileName: \"/Users/meg.wilde/Documents/Hyperion Dev/Level 3/L03T12/starwars-films-app/pages/index.js\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/meg.wilde/Documents/Hyperion Dev/Level 3/L03T12/starwars-films-app/pages/index.js\",\n                lineNumber: 8,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/meg.wilde/Documents/Hyperion Dev/Level 3/L03T12/starwars-films-app/pages/index.js\",\n        lineNumber: 6,\n        columnNumber: 3\n    }, undefined);\n_c = Index;\nIndex.getInitialProps = async function() {\n    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(\"https://swapi.dev/api/films/\");\n    const data = await res.json();\n    console.log(\"Show data fetched. Count: \".concat(data.length));\n    return {\n        shows: data\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBK0M7QUFDbEI7QUFDVTtBQUV2QyxNQUFNRyxRQUFRLENBQUNDLHNCQUNiLDhEQUFDSiwrREFBTUE7OzBCQUNMLDhEQUFDSzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQzswQkFDRUYsTUFBTUcsR0FBRyxDQUFDO3dCQUFDLEVBQUVDLElBQUksRUFBRTt5Q0FDbEIsOERBQUNDO2tDQUNDLDRFQUFDUixrREFBSUE7NEJBQ0hTLElBQUksWUFBNEIsT0FBaEJGLEtBQUtHLE9BQU8sQ0FBQ0MsRUFBRTs0QkFDL0JDLE1BQU0sYUFBNkIsT0FBaEJMLEtBQUtHLE9BQU8sQ0FBQ0MsRUFBRTtzQ0FFbEMsNEVBQUNFOztvQ0FDRU4sS0FBS08sS0FBSztvQ0FBQztvQ0FBSVAsS0FBS1EsWUFBWTs7Ozs7Ozs7Ozs7O3VCQU45QlIsS0FBS0csT0FBTyxDQUFDQyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztLQUwxQlQ7QUFvQk5BLE1BQU1jLGVBQWUsR0FBRztJQUN0QixNQUFNQyxNQUFNLE1BQU1oQix5REFBS0EsQ0FBQztJQUN4QixNQUFNaUIsT0FBTyxNQUFNRCxJQUFJRSxJQUFJO0lBRTNCQyxRQUFRQyxHQUFHLENBQUMsNkJBQXlDLE9BQVpILEtBQUtJLE1BQU07SUFFcEQsT0FBTztRQUNMQyxPQUFPTDtJQUNUO0FBQ0Y7QUFFQSwrREFBZWhCLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL015TGF5b3V0LmpzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xuXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4gKFxuICA8TGF5b3V0PlxuICAgIDxoMT5TdGFyd2FycyBGaWxtczwvaDE+XG4gICAgPHVsPlxuICAgICAge3Byb3BzLm1hcCgoeyBmaWxtIH0pID0+IChcbiAgICAgICAgPGxpIGtleT17ZmlsbS5lcGlzb2RlLmlkfT5cbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgYXM9e2AvZGV0YWlscy8ke2ZpbG0uZXBpc29kZS5pZH1gfVxuICAgICAgICAgICAgaHJlZj17YC9kZXRhaWxzLz0ke2ZpbG0uZXBpc29kZS5pZH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICB7ZmlsbS50aXRsZX0gLSB7ZmlsbS5yZWxlYXNlX2RhdGV9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgPC9MYXlvdXQ+XG4pO1xuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9zd2FwaS5kZXYvYXBpL2ZpbG1zL1wiKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgY29uc29sZS5sb2coYFNob3cgZGF0YSBmZXRjaGVkLiBDb3VudDogJHtkYXRhLmxlbmd0aH1gKTtcblxuICByZXR1cm4ge1xuICAgIHNob3dzOiBkYXRhLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiTGluayIsImZldGNoIiwiSW5kZXgiLCJwcm9wcyIsImgxIiwidWwiLCJtYXAiLCJmaWxtIiwibGkiLCJhcyIsImVwaXNvZGUiLCJpZCIsImhyZWYiLCJhIiwidGl0bGUiLCJyZWxlYXNlX2RhdGUiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXMiLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJzaG93cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});