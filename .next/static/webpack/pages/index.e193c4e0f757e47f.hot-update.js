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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Layout/layout */ \"./components/Layout/layout.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_controller_apiContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/src/controller/apiContext */ \"./src/controller/apiContext.js\");\n/* harmony import */ var _src_controller_requestParser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/src/controller/requestParser */ \"./src/controller/requestParser.js\");\n/* harmony import */ var _src_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/src/services */ \"./src/services/index.js\");\n/* harmony import */ var _src_services_Companies_companies_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../src/services/Companies/companies_services */ \"./src/services/Companies/companies_services.js\");\n/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! html2canvas */ \"./node_modules/html2canvas/dist/html2canvas.js\");\n/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_9__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n// import Shooter from '@/src/actions/shoot'\n\nfunction Home() {\n    _s();\n    // if (typeof document !== undefined) {\n    //   const {name,age,happyBirthday,showToastMessage} = useContext(ApiContext)\n    //   console.warn(name, age);\n    // }\n    const { age , name , happyBirthday , activecompany  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_src_controller_apiContext__WEBPACK_IMPORTED_MODULE_5__.ApiContext);\n    const [test, settest] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);\n    const [image, setimage] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [person, setperson] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const handleScreenshot = ()=>{\n        html2canvas__WEBPACK_IMPORTED_MODULE_9___default()(document.body).then((canvas)=>{\n            const dataUrl = canvas.toDataURL(\"image/png\");\n            const downloadLink = document.createElement(\"a\");\n            downloadLink.href = dataUrl;\n            setimage(dataUrl);\n            downloadLink.download = \"my-screenshot.png\";\n            document.body.appendChild(downloadLink);\n            downloadLink.click();\n            document.body.removeChild(downloadLink);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        alert(_src_services__WEBPACK_IMPORTED_MODULE_7__.accountService.getTokenInfo())(async ()=>{})();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex btn-info btn\",\n                onClick: ()=>\"\",\n                children: [\n                    \"test \",\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\HopeCode\\\\TrackMana\\\\pages\\\\index.jsx\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex p-4\",\n                children: [\n                    \" \",\n                    name,\n                    \" \",\n                    age,\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>happyBirthday(),\n                        className: \"btn btn-info \",\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"bi bi-home\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\HopeCode\\\\TrackMana\\\\pages\\\\index.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 111\n                            }, this),\n                            \"  Incrr age\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\HopeCode\\\\TrackMana\\\\pages\\\\index.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 46\n                    }, this),\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\HopeCode\\\\TrackMana\\\\pages\\\\index.jsx\",\n                lineNumber: 54,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn btn-primary\",\n                onClick: ()=>settest(!test),\n                children: \"Toggle\"\n            }, void 0, false, {\n                fileName: \"C:\\\\HopeCode\\\\TrackMana\\\\pages\\\\index.jsx\",\n                lineNumber: 55,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-danger col-6 p-4 \".concat(test ? \"d-flex\" : \"d-none\"),\n                children: [\n                    \"opened lorem cvdlkjdljcljc \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\HopeCode\\\\TrackMana\\\\pages\\\\index.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 30\n                    }, this),\n                    \" \",\n                    activecompany\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\HopeCode\\\\TrackMana\\\\pages\\\\index.jsx\",\n                lineNumber: 56,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handleScreenshot(),\n                children: \"Take Screenshot\"\n            }, void 0, false, {\n                fileName: \"C:\\\\HopeCode\\\\TrackMana\\\\pages\\\\index.jsx\",\n                lineNumber: 59,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: image,\n                className: \"w-50 h-50\"\n            }, void 0, false, {\n                fileName: \"C:\\\\HopeCode\\\\TrackMana\\\\pages\\\\index.jsx\",\n                lineNumber: 60,\n                columnNumber: 1\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\HopeCode\\\\TrackMana\\\\pages\\\\index.jsx\",\n        lineNumber: 52,\n        columnNumber: 1\n    }, this);\n}\n_s(Home, \"Woe7CRP1DLN4ha2+TJ1tERqnnmM=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_src_controller_apiContext__WEBPACK_IMPORTED_MODULE_5__.withApi)(Home));\nvar _c, _c1;\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQWdCTUE7QUFoQnNCO0FBQ0U7QUFFZTtBQUNFO0FBQ0s7QUFFMUI7QUFDdUM7QUFDL0I7QUFDZ0M7QUFDRjtBQUNrQjtBQUNsRiw0Q0FBNEM7QUFDTjtBQUlyQyxTQUFTaUIsT0FBTzs7SUFDZix1Q0FBdUM7SUFDdkMsNkVBQTZFO0lBQzdFLDZCQUE2QjtJQUM3QixJQUFJO0lBR0osTUFBTSxFQUFDQyxJQUFHLEVBQUVDLEtBQUksRUFBRUMsY0FBYSxFQUFFQyxjQUFhLEVBQUMsR0FBR2hCLGlEQUFVQSxDQUFDSSxrRUFBVUE7SUFDdkUsTUFBTSxDQUFDYSxNQUFNQyxRQUFRLEdBQUdqQiwrQ0FBUUEsQ0FBQyxJQUFJO0lBQ3JDLE1BQU0sQ0FBQ2tCLE9BQU9DLFNBQVMsR0FBR25CLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ29CLFFBQVFDLFVBQVUsR0FBR3JCLCtDQUFRQSxDQUFDLEVBQUU7SUFFeEMsTUFBTXNCLG1CQUFtQixJQUFNO1FBQzlCWixrREFBV0EsQ0FBQ2EsU0FBU0MsSUFBSSxFQUFFQyxJQUFJLENBQUMsQ0FBQ0MsU0FBVztZQUMxQyxNQUFNQyxVQUFVRCxPQUFPRSxTQUFTLENBQUM7WUFDakMsTUFBTUMsZUFBZU4sU0FBU08sYUFBYSxDQUFDO1lBQzVDRCxhQUFhRSxJQUFJLEdBQUdKO1lBQ3BCUixTQUFTUTtZQUNURSxhQUFhRyxRQUFRLEdBQUc7WUFDeEJULFNBQVNDLElBQUksQ0FBQ1MsV0FBVyxDQUFDSjtZQUMxQkEsYUFBYUssS0FBSztZQUNsQlgsU0FBU0MsSUFBSSxDQUFDVyxXQUFXLENBQUNOO1FBQzVCO0lBQ0E7SUFDRHhCLGdEQUFTQSxDQUFDLElBQU07UUFDZitCLE1BQU03QixzRUFBMkIsSUFDaEMsVUFBVSxDQUViO0lBQ0MsR0FBRyxFQUFFO0lBR0oscUJBQ0YsOERBQUNULGlFQUFNQTs7MEJBQUMsOERBQUN3QztnQkFBSUMsV0FBVTtnQkFBc0JDLFNBQVMsSUFBSTs7b0JBQUk7b0JBQU87Ozs7Ozs7MEJBRW5FLDhEQUFDRjtnQkFBSUMsV0FBVTs7b0JBQWE7b0JBQUUxQjtvQkFBTTtvQkFBRUQ7b0JBQUk7a0NBQUMsOERBQUM2Qjt3QkFBT0QsU0FBUyxJQUFJMUI7d0JBQWlCeUIsV0FBVTs7NEJBQWdCOzBDQUFDLDhEQUFDRztnQ0FBRUgsV0FBVTs7Ozs7OzRCQUFpQjs7Ozs7OztvQkFBb0I7Ozs7Ozs7MEJBQ2hLLDhEQUFDRTtnQkFBT0YsV0FBVTtnQkFBa0JDLFNBQVMsSUFBS3ZCLFFBQVEsQ0FBQ0Q7MEJBQVE7Ozs7OzswQkFDbkUsOERBQUNzQjtnQkFBSUMsV0FBVyx1QkFBZ0QsT0FBekJ2QixPQUFNLFdBQVUsUUFBUTs7b0JBQUk7a0NBQ3RDLDhEQUFDMkI7Ozs7O29CQUFJO29CQUFFNUI7Ozs7Ozs7MEJBRXBDLDhEQUFDMEI7Z0JBQU9ELFNBQVMsSUFBS2xCOzBCQUFvQjs7Ozs7OzBCQUMxQyw4REFBQ3NCO2dCQUFJQyxLQUFLM0I7Z0JBQU9xQixXQUFVOzs7Ozs7Ozs7Ozs7QUFJM0I7R0E3Q1U1QjtLQUFBQTtBQThDViwrREFBZSxNQUFBUCxtRUFBT0EsQ0FBQ08sS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgeyBJbnRlciB9IGZyb20gJ0BuZXh0L2ZvbnQvZ29vZ2xlJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuaW1wb3J0IExheW91dCBmcm9tICdAL2NvbXBvbmVudHMvTGF5b3V0L2xheW91dCdcclxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgQXBpQ29udGV4dCwgd2l0aEFwaSB9IGZyb20gJ0Avc3JjL2NvbnRyb2xsZXIvYXBpQ29udGV4dCdcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSZXF1ZXN0VG9SZXNwb25zZSB9IGZyb20gJ0Avc3JjL2NvbnRyb2xsZXIvcmVxdWVzdFBhcnNlcidcclxuaW1wb3J0IHsgYWNjb3VudFNlcnZpY2UsIGVtcGxveWVlU2VydmljZSB9IGZyb20gJ0Avc3JjL3NlcnZpY2VzJ1xyXG5pbXBvcnQgeyBDb21wYW5pZVNlcnZpY2VzIH0gZnJvbSAnLi8uLi9zcmMvc2VydmljZXMvQ29tcGFuaWVzL2NvbXBhbmllc19zZXJ2aWNlcyc7XHJcbi8vIGltcG9ydCBTaG9vdGVyIGZyb20gJ0Avc3JjL2FjdGlvbnMvc2hvb3QnXHJcbmltcG9ydCBodG1sMmNhbnZhcyBmcm9tICdodG1sMmNhbnZhcyc7XHJcblxyXG5jb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogWydsYXRpbiddIH0pXHJcblxyXG4gZnVuY3Rpb24gSG9tZSgpIHtcclxuICAvLyBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSB1bmRlZmluZWQpIHtcclxuICAvLyAgIGNvbnN0IHtuYW1lLGFnZSxoYXBweUJpcnRoZGF5LHNob3dUb2FzdE1lc3NhZ2V9ID0gdXNlQ29udGV4dChBcGlDb250ZXh0KVxyXG4gIC8vICAgY29uc29sZS53YXJuKG5hbWUsIGFnZSk7XHJcbiAgLy8gfVxyXG4gXHJcbiBcclxuICBjb25zdCB7YWdlLCBuYW1lLCBoYXBweUJpcnRoZGF5LCBhY3RpdmVjb21wYW55fSA9IHVzZUNvbnRleHQoQXBpQ29udGV4dCk7XHJcbiAgY29uc3QgW3Rlc3QsIHNldHRlc3RdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2ltYWdlLCBzZXRpbWFnZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3BlcnNvbiwgc2V0cGVyc29uXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuIGNvbnN0IGhhbmRsZVNjcmVlbnNob3QgPSAoKSA9PiB7XHJcbiAgaHRtbDJjYW52YXMoZG9jdW1lbnQuYm9keSkudGhlbigoY2FudmFzKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhVXJsID0gY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJyk7XHJcbiAgICBjb25zdCBkb3dubG9hZExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBkb3dubG9hZExpbmsuaHJlZiA9IGRhdGFVcmw7XHJcbiAgICBzZXRpbWFnZShkYXRhVXJsKVxyXG4gICAgZG93bmxvYWRMaW5rLmRvd25sb2FkID0gJ215LXNjcmVlbnNob3QucG5nJztcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG93bmxvYWRMaW5rKTtcclxuICAgIGRvd25sb2FkTGluay5jbGljaygpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb3dubG9hZExpbmspO1xyXG4gIH0pO1xyXG4gIH07XHJcbiB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIGFsZXJ0KGFjY291bnRTZXJ2aWNlLmdldFRva2VuSW5mbygpKVxyXG4gIChhc3luYyAoKT0+e1xyXG5cclxufSkoKVxyXG4gfSwgW10pO1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuPExheW91dD48ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGJ0bi1pbmZvIGJ0bicgb25DbGljaz17KCk9PicnfT50ZXN0IHt9IDwvZGl2PlxyXG5cclxuICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IHAtNCc+IHtuYW1lIH0ge2FnZX0gPGJ1dHRvbiBvbkNsaWNrPXsoKT0+aGFwcHlCaXJ0aGRheSgpfSBjbGFzc05hbWU9J2J0biBidG4taW5mbyAnPiA8aSBjbGFzc05hbWU9J2JpIGJpLWhvbWUnPjwvaT4gIEluY3JyIGFnZTwvYnV0dG9uPiA8L2Rpdj5cclxuPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tcHJpbWFyeScgb25DbGljaz17KCk9PihzZXR0ZXN0KCF0ZXN0KSl9PlRvZ2dsZTwvYnV0dG9uPlxyXG48ZGl2IGNsYXNzTmFtZT17YGJnLWRhbmdlciBjb2wtNiBwLTQgJHt0ZXN0PyBcImQtZmxleFwiOiBcImQtbm9uZVwifWB9PlxyXG4gIG9wZW5lZCBsb3JlbSBjdmRsa2pkbGpjbGpjIDxici8+IHthY3RpdmVjb21wYW55fVxyXG48L2Rpdj5cclxuPGJ1dHRvbiBvbkNsaWNrPXsoKT0+IGhhbmRsZVNjcmVlbnNob3QoKX0+VGFrZSBTY3JlZW5zaG90PC9idXR0b24+XHJcbjxpbWcgc3JjPXtpbWFnZX0gY2xhc3NOYW1lPVwidy01MCBoLTUwXCIvPlxyXG57Lyoge0pTT04uc3RyaW5naWZ5KHBlcnNvbil9ICovfVxyXG48L0xheW91dD5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwaShIb21lKTsiXSwibmFtZXMiOlsiaW50ZXIiLCJIZWFkIiwiSW1hZ2UiLCJzdHlsZXMiLCJMYXlvdXQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJheGlvcyIsIkFwaUNvbnRleHQiLCJ3aXRoQXBpIiwidXNlRWZmZWN0IiwiUmVxdWVzdFRvUmVzcG9uc2UiLCJhY2NvdW50U2VydmljZSIsImVtcGxveWVlU2VydmljZSIsIkNvbXBhbmllU2VydmljZXMiLCJodG1sMmNhbnZhcyIsIkhvbWUiLCJhZ2UiLCJuYW1lIiwiaGFwcHlCaXJ0aGRheSIsImFjdGl2ZWNvbXBhbnkiLCJ0ZXN0Iiwic2V0dGVzdCIsImltYWdlIiwic2V0aW1hZ2UiLCJwZXJzb24iLCJzZXRwZXJzb24iLCJoYW5kbGVTY3JlZW5zaG90IiwiZG9jdW1lbnQiLCJib2R5IiwidGhlbiIsImNhbnZhcyIsImRhdGFVcmwiLCJ0b0RhdGFVUkwiLCJkb3dubG9hZExpbmsiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsImRvd25sb2FkIiwiYXBwZW5kQ2hpbGQiLCJjbGljayIsInJlbW92ZUNoaWxkIiwiYWxlcnQiLCJnZXRUb2tlbkluZm8iLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiYnV0dG9uIiwiaSIsImJyIiwiaW1nIiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});