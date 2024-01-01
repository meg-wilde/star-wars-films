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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout */ \"./components/MyLayout.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n//the API uses a different number in the URL than the episode_id\n//to make sure you get the right film URL to pass to the details page\n//extract the last 2 digits from the URL to get the URL ID\nconst extractFilmId = (url)=>{\n    const parts = url.split(\"/\");\n    return parts[parts.length - 2];\n};\nconst Index = (props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MyLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"jsx-5e723d7f5e3bbe01\",\n                children: \"Star Wars Films\"\n            }, void 0, false, {\n                fileName: \"/Users/meg.wilde/Documents/Hyperion Dev/Level 3/L03T12/starwars-films-app/pages/index.js\",\n                lineNumber: 15,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"jsx-5e723d7f5e3bbe01\" + \" \" + \"film-list\",\n                children: props.films.map((param)=>{\n                    let { film } = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"jsx-5e723d7f5e3bbe01\" + \" \" + \"film-item\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-5e723d7f5e3bbe01\" + \" \" + \"film-details\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"jsx-5e723d7f5e3bbe01\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                            className: \"jsx-5e723d7f5e3bbe01\",\n                                            children: \"Title: \"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/meg.wilde/Documents/Hyperion Dev/Level 3/L03T12/starwars-films-app/pages/index.js\",\n                                            lineNumber: 22,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        film.title,\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                                            className: \"jsx-5e723d7f5e3bbe01\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/meg.wilde/Documents/Hyperion Dev/Level 3/L03T12/starwars-films-app/pages/index.js\",\n                                            lineNumber: 23,\n                                            columnNumber: 28\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                            className: \"jsx-5e723d7f5e3bbe01\",\n                                            children: \"Release Date: \"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/meg.wilde/Documents/Hyperion Dev/Level 3/L03T12/starwars-films-app/pages/index.js\",\n                                            lineNumber: 24,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        film.release_date\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/meg.wilde/Documents/Hyperion Dev/Level 3/L03T12/starwars-films-app/pages/index.js\",\n                                    lineNumber: 21,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"/details?id=\".concat(extractFilmId(film.url)),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"jsx-5e723d7f5e3bbe01\",\n                                        children: \"See Details\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/meg.wilde/Documents/Hyperion Dev/Level 3/L03T12/starwars-films-app/pages/index.js\",\n                                        lineNumber: 28,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/meg.wilde/Documents/Hyperion Dev/Level 3/L03T12/starwars-films-app/pages/index.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/meg.wilde/Documents/Hyperion Dev/Level 3/L03T12/starwars-films-app/pages/index.js\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, undefined)\n                    }, film.episode_id, false, {\n                        fileName: \"/Users/meg.wilde/Documents/Hyperion Dev/Level 3/L03T12/starwars-films-app/pages/index.js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/meg.wilde/Documents/Hyperion Dev/Level 3/L03T12/starwars-films-app/pages/index.js\",\n                lineNumber: 16,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"5e723d7f5e3bbe01\",\n                children: \"h1.jsx-5e723d7f5e3bbe01{margin-bottom:20px;margin-top:20px;text-align:center;color:white}.film-list.jsx-5e723d7f5e3bbe01{list-style:none;padding:0}.film-item.jsx-5e723d7f5e3bbe01{margin-bottom:10px;margin-top:10px;color:white}.film-details.jsx-5e723d7f5e3bbe01{background-color:DimGrey;padding:10px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}button.jsx-5e723d7f5e3bbe01{background-color:black;color:white;border:none;padding:8px 12px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;cursor:pointer}button.jsx-5e723d7f5e3bbe01:hover{background-color:#0056b3}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/meg.wilde/Documents/Hyperion Dev/Level 3/L03T12/starwars-films-app/pages/index.js\",\n        lineNumber: 14,\n        columnNumber: 3\n    }, undefined);\n_c = Index;\n//get the information to show on the page from the API\nIndex.getInitialProps = async function() {\n    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(\"https://swapi.dev/api/films/\");\n    const data = await res.json();\n    //show the count of results to the console\n    console.log(\"Show data fetched. Count: \".concat(data.results.length));\n    return {\n        films: data.results.map((film)=>({\n                film\n            }))\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNEM7QUFDZjtBQUNVO0FBRXZDLGdFQUFnRTtBQUNoRSxxRUFBcUU7QUFDckUsMERBQTBEO0FBQzFELE1BQU1HLGdCQUFnQixDQUFDQztJQUNyQixNQUFNQyxRQUFRRCxJQUFJRSxLQUFLLENBQUM7SUFDeEIsT0FBT0QsS0FBSyxDQUFDQSxNQUFNRSxNQUFNLEdBQUcsRUFBRTtBQUNoQztBQUVBLE1BQU1DLFFBQVEsQ0FBQ0Msc0JBQ2IsOERBQUNULDREQUFNQTs7MEJBQ0wsOERBQUNVOzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQzswREFBYTswQkFFWEYsTUFBTUcsS0FBSyxDQUFDQyxHQUFHLENBQUM7d0JBQUMsRUFBRUMsSUFBSSxFQUFFO3lDQUN4Qiw4REFBQ0M7a0VBQW1DO2tDQUNsQyw0RUFBQ0M7c0VBQWM7OzhDQUNiLDhEQUFDQzs7O3NEQUNDLDhEQUFDQzs7c0RBQUU7Ozs7Ozt3Q0FDRkosS0FBS0ssS0FBSzt3Q0FBQztzREFBQyw4REFBQ0M7Ozs7Ozs7c0RBQ2QsOERBQUNGOztzREFBRTs7Ozs7O3dDQUNGSixLQUFLTyxZQUFZOzs7Ozs7OzhDQUVwQiw4REFBQ3BCLGtEQUFJQTtvQ0FBQ3FCLE1BQU0sZUFBdUMsT0FBeEJuQixjQUFjVyxLQUFLVixHQUFHOzhDQUMvQyw0RUFBQ21COztrREFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBVExULEtBQUtVLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQU4xQmhCO0FBaUVOLHNEQUFzRDtBQUN0REEsTUFBTWlCLGVBQWUsR0FBRztJQUN0QixNQUFNQyxNQUFNLE1BQU14Qix5REFBS0EsQ0FBQztJQUN4QixNQUFNeUIsT0FBTyxNQUFNRCxJQUFJRSxJQUFJO0lBQzNCLDBDQUEwQztJQUMxQ0MsUUFBUUMsR0FBRyxDQUFDLDZCQUFpRCxPQUFwQkgsS0FBS0ksT0FBTyxDQUFDeEIsTUFBTTtJQUU1RCxPQUFPO1FBQ0xLLE9BQU9lLEtBQUtJLE9BQU8sQ0FBQ2xCLEdBQUcsQ0FBQyxDQUFDQyxPQUFVO2dCQUFFQTtZQUFLO0lBQzVDO0FBQ0Y7QUFFQSwrREFBZU4sS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTXlMYXlvdXRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5cbi8vdGhlIEFQSSB1c2VzIGEgZGlmZmVyZW50IG51bWJlciBpbiB0aGUgVVJMIHRoYW4gdGhlIGVwaXNvZGVfaWRcbi8vdG8gbWFrZSBzdXJlIHlvdSBnZXQgdGhlIHJpZ2h0IGZpbG0gVVJMIHRvIHBhc3MgdG8gdGhlIGRldGFpbHMgcGFnZVxuLy9leHRyYWN0IHRoZSBsYXN0IDIgZGlnaXRzIGZyb20gdGhlIFVSTCB0byBnZXQgdGhlIFVSTCBJRFxuY29uc3QgZXh0cmFjdEZpbG1JZCA9ICh1cmwpID0+IHtcbiAgY29uc3QgcGFydHMgPSB1cmwuc3BsaXQoXCIvXCIpO1xuICByZXR1cm4gcGFydHNbcGFydHMubGVuZ3RoIC0gMl07XG59O1xuXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4gKFxuICA8TGF5b3V0PlxuICAgIDxoMT5TdGFyIFdhcnMgRmlsbXM8L2gxPlxuICAgIDx1bCBjbGFzc05hbWU9XCJmaWxtLWxpc3RcIj5cbiAgICAgIHsvKiBtYXAgdGhlIGZpbG1zIGFuZCBjcmVhdGUgYSBsaW5rIHRvIG9wZW4gdGhlIGZpbG0gZGV0YWlscyAqL31cbiAgICAgIHtwcm9wcy5maWxtcy5tYXAoKHsgZmlsbSB9KSA9PiAoXG4gICAgICAgIDxsaSBrZXk9e2ZpbG0uZXBpc29kZV9pZH0gY2xhc3NOYW1lPVwiZmlsbS1pdGVtXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxtLWRldGFpbHNcIj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8Yj5UaXRsZTogPC9iPlxuICAgICAgICAgICAgICB7ZmlsbS50aXRsZX0gPGJyPjwvYnI+XG4gICAgICAgICAgICAgIDxiPlJlbGVhc2UgRGF0ZTogPC9iPlxuICAgICAgICAgICAgICB7ZmlsbS5yZWxlYXNlX2RhdGV9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8TGluayBocmVmPXtgL2RldGFpbHM/aWQ9JHtleHRyYWN0RmlsbUlkKGZpbG0udXJsKX1gfT5cbiAgICAgICAgICAgICAgPGJ1dHRvbj5TZWUgRGV0YWlsczwvYnV0dG9uPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBoMSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuXG4gICAgICAuZmlsbS1saXN0IHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cblxuICAgICAgLmZpbG0taXRlbSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cblxuICAgICAgLmZpbG0tZGV0YWlscyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IERpbUdyZXk7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBidXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cblxuICAgICAgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvTGF5b3V0PlxuKTtcblxuLy9nZXQgdGhlIGluZm9ybWF0aW9uIHRvIHNob3cgb24gdGhlIHBhZ2UgZnJvbSB0aGUgQVBJXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9zd2FwaS5kZXYvYXBpL2ZpbG1zL1wiKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIC8vc2hvdyB0aGUgY291bnQgb2YgcmVzdWx0cyB0byB0aGUgY29uc29sZVxuICBjb25zb2xlLmxvZyhgU2hvdyBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGEucmVzdWx0cy5sZW5ndGh9YCk7XG5cbiAgcmV0dXJuIHtcbiAgICBmaWxtczogZGF0YS5yZXN1bHRzLm1hcCgoZmlsbSkgPT4gKHsgZmlsbSB9KSksXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJMaW5rIiwiZmV0Y2giLCJleHRyYWN0RmlsbUlkIiwidXJsIiwicGFydHMiLCJzcGxpdCIsImxlbmd0aCIsIkluZGV4IiwicHJvcHMiLCJoMSIsInVsIiwiZmlsbXMiLCJtYXAiLCJmaWxtIiwibGkiLCJkaXYiLCJwIiwiYiIsInRpdGxlIiwiYnIiLCJyZWxlYXNlX2RhdGUiLCJocmVmIiwiYnV0dG9uIiwiZXBpc29kZV9pZCIsImdldEluaXRpYWxQcm9wcyIsInJlcyIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInJlc3VsdHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});