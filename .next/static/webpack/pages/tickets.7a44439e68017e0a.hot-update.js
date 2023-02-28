"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tickets",{

/***/ "./components/tickets/TrashTicket.js":
/*!*******************************************!*\
  !*** ./components/tickets/TrashTicket.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_controller_requestParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/src/controller/requestParser */ \"./src/controller/requestParser.js\");\n/* harmony import */ var _src_services_Projects_projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/src/services/Projects/projects_service */ \"./src/services/Projects/projects_service.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction TrashTickets(param) {\n    let { settoggleTrash , toggleTrash , data  } = param;\n    _s();\n    const [projectsMembers, setprojectsMembers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (async ()=>{\n            if (toggleTrash) {\n                let body = {\n                    ids: [\n                        parseInt(data.Project.id)\n                    ]\n                };\n                // alert(JSON.stringify(body));\n                const { resultStatus , result , errorStatus , errorMessage  } = await (0,_src_controller_requestParser__WEBPACK_IMPORTED_MODULE_2__.RequestToResponse)(await _src_services_Projects_projects_service__WEBPACK_IMPORTED_MODULE_3__.ProjectService.getAllProjectsMembers(body));\n                console.warn(\"project members\", resultStatus, result, errorStatus, errorMessage);\n                if (result !== null && resultStatus === \"OK\") {\n                    // alert(result)\n                    setprojectsMembers(result);\n                // console.warn(result);\n                } else alert(\"No result\");\n            }\n        })();\n    }, [\n        data\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"modal fade  \".concat(toggleTrash ? \"show fade d-block\" : \"d-none\"),\n        id: \"addproj\",\n        style: {\n            background: \"rgba(0, 0, 0, 0.7)\"\n        },\n        tabIndex: -1,\n        \"aria-hidden\": \"true\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"modal-content\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"modal-header\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                className: \"modal-title fw-bold\",\n                                id: \"leaveaddLabel\",\n                                children: [\n                                    \"Trash Ticket  \",\n                                    data.id,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\HopeCode\\\\TrackMana\\\\components\\\\tickets\\\\TrashTicket.js\",\n                                lineNumber: 39,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                className: \"btn-close\",\n                                onClick: ()=>settoggleTrash(false),\n                                \"aria-label\": \"Close\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\HopeCode\\\\TrackMana\\\\components\\\\tickets\\\\TrashTicket.js\",\n                                lineNumber: 40,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\HopeCode\\\\TrackMana\\\\components\\\\tickets\\\\TrashTicket.js\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"modal-body\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\HopeCode\\\\TrackMana\\\\components\\\\tickets\\\\TrashTicket.js\",\n                        lineNumber: 42,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"modal-footer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                className: \"btn btn-secondary\",\n                                onClick: ()=>settoggleTrash(false),\n                                children: \"Done\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\HopeCode\\\\TrackMana\\\\components\\\\tickets\\\\TrashTicket.js\",\n                                lineNumber: 45,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"btn btn-primary\",\n                                children: \"sent\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\HopeCode\\\\TrackMana\\\\components\\\\tickets\\\\TrashTicket.js\",\n                                lineNumber: 46,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\HopeCode\\\\TrackMana\\\\components\\\\tickets\\\\TrashTicket.js\",\n                        lineNumber: 44,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\HopeCode\\\\TrackMana\\\\components\\\\tickets\\\\TrashTicket.js\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\HopeCode\\\\TrackMana\\\\components\\\\tickets\\\\TrashTicket.js\",\n            lineNumber: 35,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\HopeCode\\\\TrackMana\\\\components\\\\tickets\\\\TrashTicket.js\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, this);\n}\n_s(TrashTickets, \"LQ5kkSKBtxANrX1VIng+FYEwuzY=\");\n_c = TrashTickets;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TrashTickets);\nvar _c;\n$RefreshReg$(_c, \"TrashTickets\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RpY2tldHMvVHJhc2hUaWNrZXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUFnRTtBQUNHO0FBQ087QUFDMUUsU0FBU00sYUFBYSxLQUFtQyxFQUFFO1FBQXJDLEVBQUNDLGVBQWMsRUFBRUMsWUFBVyxFQUFFQyxLQUFJLEVBQUMsR0FBbkM7O0lBRXBCLE1BQU0sQ0FBQ0MsaUJBQWlCQyxtQkFBbUIsR0FBR1QsK0NBQVFBLENBQUMsRUFBRTtJQUV6REMsZ0RBQVNBLENBQUMsSUFBTTtRQUNiLFdBQVk7WUFDWCxJQUFJSyxhQUFhO2dCQUNmLElBQUlJLE9BQU87b0JBQUVDLEtBQUs7d0JBQUNDLFNBQVNMLEtBQUtNLE9BQU8sQ0FBQ0MsRUFBRTtxQkFBRTtnQkFBQztnQkFDOUMsK0JBQStCO2dCQUMvQixNQUFNLEVBQUVDLGFBQVksRUFBRUMsT0FBTSxFQUFFQyxZQUFXLEVBQUVDLGFBQVksRUFBRSxHQUN2RCxNQUFNaEIsZ0ZBQWlCQSxDQUNyQixNQUFNQyx5R0FBb0MsQ0FBQ087Z0JBRS9DVSxRQUFRQyxJQUFJLENBQ1YsbUJBQ0FOLGNBQ0FDLFFBQ0FDLGFBQ0FDO2dCQUdGLElBQUlGLFdBQVcsSUFBSSxJQUFJRCxpQkFBaUIsTUFBTTtvQkFDNUMsZ0JBQWdCO29CQUNoQk4sbUJBQW1CTztnQkFDbkIsd0JBQXdCO2dCQUMxQixPQUFPTSxNQUFNO1lBQ2YsQ0FBQztRQUNIO0lBQ0YsR0FBRztRQUFDZjtLQUFLO0lBQ1AscUJBQ0ksOERBQUNnQjtRQUFJQyxXQUFZLGVBQTBELE9BQTNDbEIsY0FBYSxzQkFBcUIsUUFBUTtRQUFJUSxJQUFHO1FBQVVXLE9BQU87WUFBQ0MsWUFBVztRQUFvQjtRQUFHQyxVQUFVLENBQUM7UUFBR0MsZUFBWTtrQkFDL0osNEVBQUNMO1lBQUlDLFdBQVU7c0JBQ2YsNEVBQUNLO2dCQUFLTCxXQUFVOztrQ0FFWiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDTTtnQ0FBR04sV0FBVTtnQ0FBdUJWLElBQUc7O29DQUFnQjtvQ0FBZVAsS0FBS08sRUFBRTtvQ0FBQzs7Ozs7OzswQ0FDL0UsOERBQUNpQjtnQ0FBT0MsTUFBSztnQ0FBU1IsV0FBVTtnQ0FBWVMsU0FBUyxJQUFLNUIsZUFBZSxLQUFLO2dDQUFJNkIsY0FBVzs7Ozs7Ozs7Ozs7O2tDQUVqRyw4REFBQ1g7d0JBQUlDLFdBQVU7Ozs7OztrQ0FFZiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDTztnQ0FBT0MsTUFBSztnQ0FBU1IsV0FBVTtnQ0FBb0JTLFNBQVMsSUFBSzVCLGVBQWUsS0FBSzswQ0FBSTs7Ozs7OzBDQUMxRiw4REFBQzBCO2dDQUFPQyxNQUFLO2dDQUFTUixXQUFVOzBDQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1sRTtHQWhEU3BCO0tBQUFBO0FBa0RULCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGlja2V0cy9UcmFzaFRpY2tldC5qcz83M2ZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBSZXF1ZXN0VG9SZXNwb25zZSB9IGZyb20gXCJAL3NyYy9jb250cm9sbGVyL3JlcXVlc3RQYXJzZXJcIjtcclxuaW1wb3J0IHsgUHJvamVjdFNlcnZpY2UgfSBmcm9tIFwiQC9zcmMvc2VydmljZXMvUHJvamVjdHMvcHJvamVjdHNfc2VydmljZVwiO1xyXG5mdW5jdGlvbiBUcmFzaFRpY2tldHMoe3NldHRvZ2dsZVRyYXNoLCB0b2dnbGVUcmFzaCwgZGF0YX0pIHtcclxuICAgIFxyXG4gIGNvbnN0IFtwcm9qZWN0c01lbWJlcnMsIHNldHByb2plY3RzTWVtYmVyc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAodG9nZ2xlVHJhc2gpIHtcclxuICAgICAgICBsZXQgYm9keSA9IHsgaWRzOiBbcGFyc2VJbnQoZGF0YS5Qcm9qZWN0LmlkKV0gfTtcclxuICAgICAgICAvLyBhbGVydChKU09OLnN0cmluZ2lmeShib2R5KSk7XHJcbiAgICAgICAgY29uc3QgeyByZXN1bHRTdGF0dXMsIHJlc3VsdCwgZXJyb3JTdGF0dXMsIGVycm9yTWVzc2FnZSB9ID1cclxuICAgICAgICAgIGF3YWl0IFJlcXVlc3RUb1Jlc3BvbnNlKFxyXG4gICAgICAgICAgICBhd2FpdCBQcm9qZWN0U2VydmljZS5nZXRBbGxQcm9qZWN0c01lbWJlcnMoYm9keSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgICAgXCJwcm9qZWN0IG1lbWJlcnNcIixcclxuICAgICAgICAgIHJlc3VsdFN0YXR1cyxcclxuICAgICAgICAgIHJlc3VsdCxcclxuICAgICAgICAgIGVycm9yU3RhdHVzLFxyXG4gICAgICAgICAgZXJyb3JNZXNzYWdlXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gbnVsbCAmJiByZXN1bHRTdGF0dXMgPT09IFwiT0tcIikge1xyXG4gICAgICAgICAgLy8gYWxlcnQocmVzdWx0KVxyXG4gICAgICAgICAgc2V0cHJvamVjdHNNZW1iZXJzKHJlc3VsdCk7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLndhcm4ocmVzdWx0KTtcclxuICAgICAgICB9IGVsc2UgYWxlcnQoXCJObyByZXN1bHRcIik7XHJcbiAgICAgIH1cclxuICAgIH0pKCk7XHJcbiAgfSwgW2RhdGFdKTtcclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgYG1vZGFsIGZhZGUgICR7dG9nZ2xlVHJhc2g/IFwic2hvdyBmYWRlIGQtYmxvY2tcIjogXCJkLW5vbmVcIn1gfSBpZD1cImFkZHByb2pcIiBzdHlsZT17e2JhY2tncm91bmQ6XCJyZ2JhKDAsIDAsIDAsIDAuNylcIn19IHRhYkluZGV4PXstMX0gYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgbW9kYWwtZGlhbG9nLWNlbnRlcmVkIG1vZGFsLW1kIG1vZGFsLWRpYWxvZy1zY3JvbGxhYmxlXCI+XHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlICBmdy1ib2xkXCIgaWQ9XCJsZWF2ZWFkZExhYmVsXCI+VHJhc2ggVGlja2V0ICB7ZGF0YS5pZH0gPC9oNT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0bi1jbG9zZVwiIG9uQ2xpY2s9eygpPT4oc2V0dG9nZ2xlVHJhc2goZmFsc2UpKX0gYXJpYS1sYWJlbD1cIkNsb3NlXCI+PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIG9uQ2xpY2s9eygpPT4oc2V0dG9nZ2xlVHJhc2goZmFsc2UpKX0+RG9uZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+c2VudDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUcmFzaFRpY2tldHM7Il0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlJlcXVlc3RUb1Jlc3BvbnNlIiwiUHJvamVjdFNlcnZpY2UiLCJUcmFzaFRpY2tldHMiLCJzZXR0b2dnbGVUcmFzaCIsInRvZ2dsZVRyYXNoIiwiZGF0YSIsInByb2plY3RzTWVtYmVycyIsInNldHByb2plY3RzTWVtYmVycyIsImJvZHkiLCJpZHMiLCJwYXJzZUludCIsIlByb2plY3QiLCJpZCIsInJlc3VsdFN0YXR1cyIsInJlc3VsdCIsImVycm9yU3RhdHVzIiwiZXJyb3JNZXNzYWdlIiwiZ2V0QWxsUHJvamVjdHNNZW1iZXJzIiwiY29uc29sZSIsIndhcm4iLCJhbGVydCIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZCIsInRhYkluZGV4IiwiYXJpYS1oaWRkZW4iLCJmb3JtIiwiaDUiLCJidXR0b24iLCJ0eXBlIiwib25DbGljayIsImFyaWEtbGFiZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/tickets/TrashTicket.js\n"));

/***/ })

});