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

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Layout/layout */ \"./components/Layout/layout.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_controller_apiContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/src/controller/apiContext */ \"./src/controller/apiContext.js\");\n/* harmony import */ var _src_controller_requestParser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/src/controller/requestParser */ \"./src/controller/requestParser.js\");\n/* harmony import */ var _src_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/src/services */ \"./src/services/index.js\");\n/* harmony import */ var _src_services_Companies_companies_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../src/services/Companies/companies_services */ \"./src/services/Companies/companies_services.js\");\n/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! html2canvas */ \"./node_modules/html2canvas/dist/html2canvas.js\");\n/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_9__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n// import Shooter from '@/src/actions/shoot'\n\nfunction Home() {\n    _s();\n    // if (typeof document !== undefined) {\n    //   const {name,age,happyBirthday,showToastMessage} = useContext(ApiContext)\n    //   console.warn(name, age);\n    // }\n    const { age , name , happyBirthday , activecompany  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_src_controller_apiContext__WEBPACK_IMPORTED_MODULE_5__.ApiContext);\n    const [test, settest] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);\n    const [image, setimage] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [person, setperson] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const handleScreenshot = ()=>{\n        html2canvas__WEBPACK_IMPORTED_MODULE_9___default()(document.body).then((canvas)=>{\n            const dataUrl = canvas.toDataURL(\"image/png\");\n            const downloadLink = document.createElement(\"a\");\n            downloadLink.href = dataUrl;\n            setimage(dataUrl);\n            downloadLink.download = \"my-screenshot.png\";\n            document.body.appendChild(downloadLink);\n            downloadLink.click();\n            document.body.removeChild(downloadLink);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        alert(_src_services__WEBPACK_IMPORTED_MODULE_7__.accountService.getTokenInfo().exp)(async ()=>{})();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex btn-info btn\",\n                onClick: ()=>\"\",\n                children: [\n                    \"test \",\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\HopeCode\\\\TrackMana\\\\pages\\\\index.jsx\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex p-4\",\n                children: [\n                    \" \",\n                    name,\n                    \" \",\n                    age,\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>happyBirthday(),\n                        className: \"btn btn-info \",\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"bi bi-home\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\HopeCode\\\\TrackMana\\\\pages\\\\index.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 111\n                            }, this),\n                            \"  Incrr age\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\HopeCode\\\\TrackMana\\\\pages\\\\index.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 46\n                    }, this),\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\HopeCode\\\\TrackMana\\\\pages\\\\index.jsx\",\n                lineNumber: 54,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn btn-primary\",\n                onClick: ()=>settest(!test),\n                children: \"Toggle\"\n            }, void 0, false, {\n                fileName: \"C:\\\\HopeCode\\\\TrackMana\\\\pages\\\\index.jsx\",\n                lineNumber: 55,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-danger col-6 p-4 \".concat(test ? \"d-flex\" : \"d-none\"),\n                children: [\n                    \"opened lorem cvdlkjdljcljc \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\HopeCode\\\\TrackMana\\\\pages\\\\index.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 30\n                    }, this),\n                    \" \",\n                    activecompany\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\HopeCode\\\\TrackMana\\\\pages\\\\index.jsx\",\n                lineNumber: 56,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handleScreenshot(),\n                children: \"Take Screenshot\"\n            }, void 0, false, {\n                fileName: \"C:\\\\HopeCode\\\\TrackMana\\\\pages\\\\index.jsx\",\n                lineNumber: 59,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: image,\n                className: \"w-50 h-50\"\n            }, void 0, false, {\n                fileName: \"C:\\\\HopeCode\\\\TrackMana\\\\pages\\\\index.jsx\",\n                lineNumber: 60,\n                columnNumber: 1\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\HopeCode\\\\TrackMana\\\\pages\\\\index.jsx\",\n        lineNumber: 52,\n        columnNumber: 1\n    }, this);\n}\n_s(Home, \"Woe7CRP1DLN4ha2+TJ1tERqnnmM=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_src_controller_apiContext__WEBPACK_IMPORTED_MODULE_5__.withApi)(Home));\nvar _c, _c1;\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQWdCTUE7QUFoQnNCO0FBQ0U7QUFFZTtBQUNFO0FBQ0s7QUFFMUI7QUFDdUM7QUFDL0I7QUFDZ0M7QUFDRjtBQUNrQjtBQUNsRiw0Q0FBNEM7QUFDTjtBQUlyQyxTQUFTaUIsT0FBTzs7SUFDZix1Q0FBdUM7SUFDdkMsNkVBQTZFO0lBQzdFLDZCQUE2QjtJQUM3QixJQUFJO0lBR0osTUFBTSxFQUFDQyxJQUFHLEVBQUVDLEtBQUksRUFBRUMsY0FBYSxFQUFFQyxjQUFhLEVBQUMsR0FBR2hCLGlEQUFVQSxDQUFDSSxrRUFBVUE7SUFDdkUsTUFBTSxDQUFDYSxNQUFNQyxRQUFRLEdBQUdqQiwrQ0FBUUEsQ0FBQyxJQUFJO0lBQ3JDLE1BQU0sQ0FBQ2tCLE9BQU9DLFNBQVMsR0FBR25CLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ29CLFFBQVFDLFVBQVUsR0FBR3JCLCtDQUFRQSxDQUFDLEVBQUU7SUFFeEMsTUFBTXNCLG1CQUFtQixJQUFNO1FBQzlCWixrREFBV0EsQ0FBQ2EsU0FBU0MsSUFBSSxFQUFFQyxJQUFJLENBQUMsQ0FBQ0MsU0FBVztZQUMxQyxNQUFNQyxVQUFVRCxPQUFPRSxTQUFTLENBQUM7WUFDakMsTUFBTUMsZUFBZU4sU0FBU08sYUFBYSxDQUFDO1lBQzVDRCxhQUFhRSxJQUFJLEdBQUdKO1lBQ3BCUixTQUFTUTtZQUNURSxhQUFhRyxRQUFRLEdBQUc7WUFDeEJULFNBQVNDLElBQUksQ0FBQ1MsV0FBVyxDQUFDSjtZQUMxQkEsYUFBYUssS0FBSztZQUNsQlgsU0FBU0MsSUFBSSxDQUFDVyxXQUFXLENBQUNOO1FBQzVCO0lBQ0E7SUFDRHhCLGdEQUFTQSxDQUFDLElBQU07UUFDZitCLE1BQU03QixzRUFBMkIsR0FBRytCLEdBQUcsRUFDdEMsVUFBVSxDQUViO0lBQ0MsR0FBRyxFQUFFO0lBR0oscUJBQ0YsOERBQUN4QyxpRUFBTUE7OzBCQUFDLDhEQUFDeUM7Z0JBQUlDLFdBQVU7Z0JBQXNCQyxTQUFTLElBQUk7O29CQUFJO29CQUFPOzs7Ozs7OzBCQUVuRSw4REFBQ0Y7Z0JBQUlDLFdBQVU7O29CQUFhO29CQUFFM0I7b0JBQU07b0JBQUVEO29CQUFJO2tDQUFDLDhEQUFDOEI7d0JBQU9ELFNBQVMsSUFBSTNCO3dCQUFpQjBCLFdBQVU7OzRCQUFnQjswQ0FBQyw4REFBQ0c7Z0NBQUVILFdBQVU7Ozs7Ozs0QkFBaUI7Ozs7Ozs7b0JBQW9COzs7Ozs7OzBCQUNoSyw4REFBQ0U7Z0JBQU9GLFdBQVU7Z0JBQWtCQyxTQUFTLElBQUt4QixRQUFRLENBQUNEOzBCQUFROzs7Ozs7MEJBQ25FLDhEQUFDdUI7Z0JBQUlDLFdBQVcsdUJBQWdELE9BQXpCeEIsT0FBTSxXQUFVLFFBQVE7O29CQUFJO2tDQUN0Qyw4REFBQzRCOzs7OztvQkFBSTtvQkFBRTdCOzs7Ozs7OzBCQUVwQyw4REFBQzJCO2dCQUFPRCxTQUFTLElBQUtuQjswQkFBb0I7Ozs7OzswQkFDMUMsOERBQUN1QjtnQkFBSUMsS0FBSzVCO2dCQUFPc0IsV0FBVTs7Ozs7Ozs7Ozs7O0FBSTNCO0dBN0NVN0I7S0FBQUE7QUE4Q1YsK0RBQWUsTUFBQVAsbUVBQU9BLENBQUNPLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHsgSW50ZXIgfSBmcm9tICdAbmV4dC9mb250L2dvb2dsZSdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnQC9jb21wb25lbnRzL0xheW91dC9sYXlvdXQnXHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEFwaUNvbnRleHQsIHdpdGhBcGkgfSBmcm9tICdAL3NyYy9jb250cm9sbGVyL2FwaUNvbnRleHQnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUmVxdWVzdFRvUmVzcG9uc2UgfSBmcm9tICdAL3NyYy9jb250cm9sbGVyL3JlcXVlc3RQYXJzZXInXHJcbmltcG9ydCB7IGFjY291bnRTZXJ2aWNlLCBlbXBsb3llZVNlcnZpY2UgfSBmcm9tICdAL3NyYy9zZXJ2aWNlcydcclxuaW1wb3J0IHsgQ29tcGFuaWVTZXJ2aWNlcyB9IGZyb20gJy4vLi4vc3JjL3NlcnZpY2VzL0NvbXBhbmllcy9jb21wYW5pZXNfc2VydmljZXMnO1xyXG4vLyBpbXBvcnQgU2hvb3RlciBmcm9tICdAL3NyYy9hY3Rpb25zL3Nob290J1xyXG5pbXBvcnQgaHRtbDJjYW52YXMgZnJvbSAnaHRtbDJjYW52YXMnO1xyXG5cclxuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFsnbGF0aW4nXSB9KVxyXG5cclxuIGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgLy8gaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgLy8gICBjb25zdCB7bmFtZSxhZ2UsaGFwcHlCaXJ0aGRheSxzaG93VG9hc3RNZXNzYWdlfSA9IHVzZUNvbnRleHQoQXBpQ29udGV4dClcclxuICAvLyAgIGNvbnNvbGUud2FybihuYW1lLCBhZ2UpO1xyXG4gIC8vIH1cclxuIFxyXG4gXHJcbiAgY29uc3Qge2FnZSwgbmFtZSwgaGFwcHlCaXJ0aGRheSwgYWN0aXZlY29tcGFueX0gPSB1c2VDb250ZXh0KEFwaUNvbnRleHQpO1xyXG4gIGNvbnN0IFt0ZXN0LCBzZXR0ZXN0XSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtpbWFnZSwgc2V0aW1hZ2VdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtwZXJzb24sIHNldHBlcnNvbl0gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiBjb25zdCBoYW5kbGVTY3JlZW5zaG90ID0gKCkgPT4ge1xyXG4gIGh0bWwyY2FudmFzKGRvY3VtZW50LmJvZHkpLnRoZW4oKGNhbnZhcykgPT4ge1xyXG4gICAgY29uc3QgZGF0YVVybCA9IGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL3BuZycpO1xyXG4gICAgY29uc3QgZG93bmxvYWRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgZG93bmxvYWRMaW5rLmhyZWYgPSBkYXRhVXJsO1xyXG4gICAgc2V0aW1hZ2UoZGF0YVVybClcclxuICAgIGRvd25sb2FkTGluay5kb3dubG9hZCA9ICdteS1zY3JlZW5zaG90LnBuZyc7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvd25sb2FkTGluayk7XHJcbiAgICBkb3dubG9hZExpbmsuY2xpY2soKTtcclxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG93bmxvYWRMaW5rKTtcclxuICB9KTtcclxuICB9O1xyXG4gdXNlRWZmZWN0KCgpID0+IHtcclxuICBhbGVydChhY2NvdW50U2VydmljZS5nZXRUb2tlbkluZm8oKS5leHApXHJcbiAgKGFzeW5jICgpPT57XHJcblxyXG59KSgpXHJcbiB9LCBbXSk7XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG48TGF5b3V0PjxkaXYgY2xhc3NOYW1lPSdkLWZsZXggYnRuLWluZm8gYnRuJyBvbkNsaWNrPXsoKT0+Jyd9PnRlc3Qge30gPC9kaXY+XHJcblxyXG4gIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXggcC00Jz4ge25hbWUgfSB7YWdlfSA8YnV0dG9uIG9uQ2xpY2s9eygpPT5oYXBweUJpcnRoZGF5KCl9IGNsYXNzTmFtZT0nYnRuIGJ0bi1pbmZvICc+IDxpIGNsYXNzTmFtZT0nYmkgYmktaG9tZSc+PC9pPiAgSW5jcnIgYWdlPC9idXR0b24+IDwvZGl2PlxyXG48YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1wcmltYXJ5JyBvbkNsaWNrPXsoKT0+KHNldHRlc3QoIXRlc3QpKX0+VG9nZ2xlPC9idXR0b24+XHJcbjxkaXYgY2xhc3NOYW1lPXtgYmctZGFuZ2VyIGNvbC02IHAtNCAke3Rlc3Q/IFwiZC1mbGV4XCI6IFwiZC1ub25lXCJ9YH0+XHJcbiAgb3BlbmVkIGxvcmVtIGN2ZGxramRsamNsamMgPGJyLz4ge2FjdGl2ZWNvbXBhbnl9XHJcbjwvZGl2PlxyXG48YnV0dG9uIG9uQ2xpY2s9eygpPT4gaGFuZGxlU2NyZWVuc2hvdCgpfT5UYWtlIFNjcmVlbnNob3Q8L2J1dHRvbj5cclxuPGltZyBzcmM9e2ltYWdlfSBjbGFzc05hbWU9XCJ3LTUwIGgtNTBcIi8+XHJcbnsvKiB7SlNPTi5zdHJpbmdpZnkocGVyc29uKX0gKi99XHJcbjwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXBpKEhvbWUpOyJdLCJuYW1lcyI6WyJpbnRlciIsIkhlYWQiLCJJbWFnZSIsInN0eWxlcyIsIkxheW91dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsImF4aW9zIiwiQXBpQ29udGV4dCIsIndpdGhBcGkiLCJ1c2VFZmZlY3QiLCJSZXF1ZXN0VG9SZXNwb25zZSIsImFjY291bnRTZXJ2aWNlIiwiZW1wbG95ZWVTZXJ2aWNlIiwiQ29tcGFuaWVTZXJ2aWNlcyIsImh0bWwyY2FudmFzIiwiSG9tZSIsImFnZSIsIm5hbWUiLCJoYXBweUJpcnRoZGF5IiwiYWN0aXZlY29tcGFueSIsInRlc3QiLCJzZXR0ZXN0IiwiaW1hZ2UiLCJzZXRpbWFnZSIsInBlcnNvbiIsInNldHBlcnNvbiIsImhhbmRsZVNjcmVlbnNob3QiLCJkb2N1bWVudCIsImJvZHkiLCJ0aGVuIiwiY2FudmFzIiwiZGF0YVVybCIsInRvRGF0YVVSTCIsImRvd25sb2FkTGluayIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwiZG93bmxvYWQiLCJhcHBlbmRDaGlsZCIsImNsaWNrIiwicmVtb3ZlQ2hpbGQiLCJhbGVydCIsImdldFRva2VuSW5mbyIsImV4cCIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJidXR0b24iLCJpIiwiYnIiLCJpbWciLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});