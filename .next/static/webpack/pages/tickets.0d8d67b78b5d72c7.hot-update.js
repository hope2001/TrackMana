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

/***/ "./components/Layout/joditTextEditor.jsx":
/*!***********************************************!*\
  !*** ./components/Layout/joditTextEditor.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jodit_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jodit-react */ \"./node_modules/jodit-react/build/jodit-react.js\");\n/* harmony import */ var jodit_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jodit_react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction JoditTextEditor(param) {\n    let { placeholder  } = param;\n    _s();\n    const editor = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // const config = useMemo(\n    // \t{\n    // \t\treadonly: false, // all options from https://xdsoft.net/jodit/doc/,\n    // \t\tplaceholder:  'Start typings...'\n    // \t\t// placeholder: placeholder || 'Start typings...'\n    // \t},\n    // \t[placeholder]\n    // );\n    const config = {\n        readonly: false,\n        height: 400\n    };\n    // useEffect(() => {\n    // }, [content]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((jodit_react__WEBPACK_IMPORTED_MODULE_2___default()), {\n                ref: editor,\n                value: content,\n                config: config,\n                tabIndex: 1,\n                onBlur: (newContent)=>setContent(newContent),\n                onChange: (newContent)=>{}\n            }, void 0, false, {\n                fileName: \"C:\\\\HopeCode\\\\TrackMana\\\\components\\\\Layout\\\\joditTextEditor.jsx\",\n                lineNumber: 24,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    \" \",\n                    content,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\HopeCode\\\\TrackMana\\\\components\\\\Layout\\\\joditTextEditor.jsx\",\n                lineNumber: 32,\n                columnNumber: 3\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(JoditTextEditor, \"sqxCfRZDY/3IyjXKm4U/Fj355ys=\");\n_c = JoditTextEditor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (JoditTextEditor);\nvar _c;\n$RefreshReg$(_c, \"JoditTextEditor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC9qb2RpdFRleHRFZGl0b3IuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBeUQ7QUFDbkI7QUFDdEMsU0FBU0ssZ0JBQWdCLEtBQWEsRUFBRTtRQUFmLEVBQUNDLFlBQVcsRUFBQyxHQUFiOztJQUNyQixNQUFNQyxTQUFTTCw2Q0FBTUEsQ0FBQyxJQUFJO0lBQzdCLE1BQU0sQ0FBQ00sU0FBU0MsV0FBVyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUV2QywwQkFBMEI7SUFDMUIsS0FBSztJQUNMLHdFQUF3RTtJQUN4RSxxQ0FBcUM7SUFDckMsc0RBQXNEO0lBQ3RELE1BQU07SUFDTixpQkFBaUI7SUFDakIsS0FBSztJQUNGLE1BQU1TLFNBQVM7UUFDWEMsVUFBVSxLQUFLO1FBQ2ZDLFFBQVE7SUFDVjtJQUNGLG9CQUFvQjtJQUVwQixpQkFBaUI7SUFFcEIscUJBQVE7OzBCQUNQLDhEQUFDUixvREFBV0E7Z0JBQ1hTLEtBQUtOO2dCQUNMTyxPQUFPTjtnQkFDUEUsUUFBUUE7Z0JBQ1JLLFVBQVU7Z0JBQ1ZDLFFBQVEsQ0FBQ0MsYUFBZVIsV0FBV1E7Z0JBQ25DQyxVQUFVLENBQUNELGFBQWUsQ0FBQzs7Ozs7OzBCQUU1Qiw4REFBQ0U7Z0JBQUlDLFdBQVU7O29CQUFZO29CQUFFWjtvQkFBUTs7Ozs7Ozs7O0FBR3ZDO0dBaENTSDtLQUFBQTtBQW1DVCwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xheW91dC9qb2RpdFRleHRFZGl0b3IuanN4PzQ0N2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBKb2RpdEVkaXRvciBmcm9tICdqb2RpdC1yZWFjdCc7XHJcbmZ1bmN0aW9uIEpvZGl0VGV4dEVkaXRvcih7cGxhY2Vob2xkZXJ9KSB7XHJcbiAgICBjb25zdCBlZGl0b3IgPSB1c2VSZWYobnVsbCk7XHJcblx0Y29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuXHQvLyBjb25zdCBjb25maWcgPSB1c2VNZW1vKFxyXG5cdC8vIFx0e1xyXG5cdC8vIFx0XHRyZWFkb25seTogZmFsc2UsIC8vIGFsbCBvcHRpb25zIGZyb20gaHR0cHM6Ly94ZHNvZnQubmV0L2pvZGl0L2RvYy8sXHJcblx0Ly8gXHRcdHBsYWNlaG9sZGVyOiAgJ1N0YXJ0IHR5cGluZ3MuLi4nXHJcblx0Ly8gXHRcdC8vIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlciB8fCAnU3RhcnQgdHlwaW5ncy4uLidcclxuXHQvLyBcdH0sXHJcblx0Ly8gXHRbcGxhY2Vob2xkZXJdXHJcblx0Ly8gKTtcclxuICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgICByZWFkb25seTogZmFsc2UsXHJcbiAgICAgICAgaGVpZ2h0OiA0MDBcclxuICAgICAgfTtcclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgLy8gfSwgW2NvbnRlbnRdKTtcclxuXHJcblx0cmV0dXJuICg8PlxyXG5cdFx0PEpvZGl0RWRpdG9yXHJcblx0XHRcdHJlZj17ZWRpdG9yfVxyXG5cdFx0XHR2YWx1ZT17Y29udGVudH1cclxuXHRcdFx0Y29uZmlnPXtjb25maWd9XHJcblx0XHRcdHRhYkluZGV4PXsxfSAvLyB0YWJJbmRleCBvZiB0ZXh0YXJlYVxyXG5cdFx0XHRvbkJsdXI9eyhuZXdDb250ZW50KSA9PiBzZXRDb250ZW50KG5ld0NvbnRlbnQpfSAvLyBwcmVmZXJyZWQgdG8gdXNlIG9ubHkgdGhpcyBvcHRpb24gdG8gdXBkYXRlIHRoZSBjb250ZW50IGZvciBwZXJmb3JtYW5jZSByZWFzb25zXHJcblx0XHRcdG9uQ2hhbmdlPXsobmV3Q29udGVudCkgPT4ge319XHJcblx0XHQvPlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj4ge2NvbnRlbnR9IDwvZGl2PlxyXG5cdFx0PC8+XHJcblx0KTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEpvZGl0VGV4dEVkaXRvcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZU1lbW8iLCJKb2RpdEVkaXRvciIsIkpvZGl0VGV4dEVkaXRvciIsInBsYWNlaG9sZGVyIiwiZWRpdG9yIiwiY29udGVudCIsInNldENvbnRlbnQiLCJjb25maWciLCJyZWFkb25seSIsImhlaWdodCIsInJlZiIsInZhbHVlIiwidGFiSW5kZXgiLCJvbkJsdXIiLCJuZXdDb250ZW50Iiwib25DaGFuZ2UiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout/joditTextEditor.jsx\n"));

/***/ })

});