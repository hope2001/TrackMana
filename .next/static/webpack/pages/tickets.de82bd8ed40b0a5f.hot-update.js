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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jodit_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jodit-react */ \"./node_modules/jodit-react/build/jodit-react.js\");\n/* harmony import */ var jodit_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jodit_react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction JoditTextEditor(param) {\n    let { placeholder  } = param;\n    _s();\n    const editor = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // const config = useMemo(\n    // \t{\n    // \t\treadonly: false, // all options from https://xdsoft.net/jodit/doc/,\n    // \t\tplaceholder:  'Start typings...'\n    // \t\t// placeholder: placeholder || 'Start typings...'\n    // \t},\n    // \t[placeholder]\n    // );\n    const config = {\n        readonly: false,\n        height: 400\n    };\n    // useEffect(() => {\n    // }, [content]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((jodit_react__WEBPACK_IMPORTED_MODULE_2___default()), {\n                ref: editor,\n                value: content,\n                config: config,\n                tabIndex: 1,\n                onBlur: (newContent)=>setContent(newContent),\n                onChange: (newContent)=>{}\n            }, void 0, false, {\n                fileName: \"C:\\\\HopeCode\\\\TrackMana\\\\components\\\\Layout\\\\joditTextEditor.jsx\",\n                lineNumber: 24,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    \" \",\n                    {\n                        __\n                    },\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\HopeCode\\\\TrackMana\\\\components\\\\Layout\\\\joditTextEditor.jsx\",\n                lineNumber: 32,\n                columnNumber: 3\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(JoditTextEditor, \"sqxCfRZDY/3IyjXKm4U/Fj355ys=\");\n_c = JoditTextEditor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (JoditTextEditor);\nvar _c;\n$RefreshReg$(_c, \"JoditTextEditor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC9qb2RpdFRleHRFZGl0b3IuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBeUQ7QUFDbkI7QUFDdEMsU0FBU0ssZ0JBQWdCLEtBQWEsRUFBRTtRQUFmLEVBQUNDLFlBQVcsRUFBQyxHQUFiOztJQUNyQixNQUFNQyxTQUFTTCw2Q0FBTUEsQ0FBQyxJQUFJO0lBQzdCLE1BQU0sQ0FBQ00sU0FBU0MsV0FBVyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUV2QywwQkFBMEI7SUFDMUIsS0FBSztJQUNMLHdFQUF3RTtJQUN4RSxxQ0FBcUM7SUFDckMsc0RBQXNEO0lBQ3RELE1BQU07SUFDTixpQkFBaUI7SUFDakIsS0FBSztJQUNGLE1BQU1TLFNBQVM7UUFDWEMsVUFBVSxLQUFLO1FBQ2ZDLFFBQVE7SUFDVjtJQUNGLG9CQUFvQjtJQUVwQixpQkFBaUI7SUFFcEIscUJBQVE7OzBCQUNQLDhEQUFDUixvREFBV0E7Z0JBQ1hTLEtBQUtOO2dCQUNMTyxPQUFPTjtnQkFDUEUsUUFBUUE7Z0JBQ1JLLFVBQVU7Z0JBQ1ZDLFFBQVEsQ0FBQ0MsYUFBZVIsV0FBV1E7Z0JBQ25DQyxVQUFVLENBQUNELGFBQWUsQ0FBQzs7Ozs7OzBCQUU1Qiw4REFBQ0U7Z0JBQUlDLFdBQVU7O29CQUFZO29CQUFFO3dCQUFFQztvQkFBRTtvQkFBRTs7Ozs7Ozs7O0FBR3JDO0dBaENTaEI7S0FBQUE7QUFtQ1QsK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvam9kaXRUZXh0RWRpdG9yLmpzeD80NDdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSm9kaXRFZGl0b3IgZnJvbSAnam9kaXQtcmVhY3QnO1xyXG5mdW5jdGlvbiBKb2RpdFRleHRFZGl0b3Ioe3BsYWNlaG9sZGVyfSkge1xyXG4gICAgY29uc3QgZWRpdG9yID0gdXNlUmVmKG51bGwpO1xyXG5cdGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcblx0Ly8gY29uc3QgY29uZmlnID0gdXNlTWVtbyhcclxuXHQvLyBcdHtcclxuXHQvLyBcdFx0cmVhZG9ubHk6IGZhbHNlLCAvLyBhbGwgb3B0aW9ucyBmcm9tIGh0dHBzOi8veGRzb2Z0Lm5ldC9qb2RpdC9kb2MvLFxyXG5cdC8vIFx0XHRwbGFjZWhvbGRlcjogICdTdGFydCB0eXBpbmdzLi4uJ1xyXG5cdC8vIFx0XHQvLyBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIgfHwgJ1N0YXJ0IHR5cGluZ3MuLi4nXHJcblx0Ly8gXHR9LFxyXG5cdC8vIFx0W3BsYWNlaG9sZGVyXVxyXG5cdC8vICk7XHJcbiAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgICAgcmVhZG9ubHk6IGZhbHNlLFxyXG4gICAgICAgIGhlaWdodDogNDAwXHJcbiAgICAgIH07XHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgIC8vIH0sIFtjb250ZW50XSk7XHJcblxyXG5cdHJldHVybiAoPD5cclxuXHRcdDxKb2RpdEVkaXRvclxyXG5cdFx0XHRyZWY9e2VkaXRvcn1cclxuXHRcdFx0dmFsdWU9e2NvbnRlbnR9XHJcblx0XHRcdGNvbmZpZz17Y29uZmlnfVxyXG5cdFx0XHR0YWJJbmRleD17MX0gLy8gdGFiSW5kZXggb2YgdGV4dGFyZWFcclxuXHRcdFx0b25CbHVyPXsobmV3Q29udGVudCkgPT4gc2V0Q29udGVudChuZXdDb250ZW50KX0gLy8gcHJlZmVycmVkIHRvIHVzZSBvbmx5IHRoaXMgb3B0aW9uIHRvIHVwZGF0ZSB0aGUgY29udGVudCBmb3IgcGVyZm9ybWFuY2UgcmVhc29uc1xyXG5cdFx0XHRvbkNoYW5nZT17KG5ld0NvbnRlbnQpID0+IHt9fVxyXG5cdFx0Lz5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+IHt7IF9ffX0gPC9kaXY+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSm9kaXRUZXh0RWRpdG9yOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlTWVtbyIsIkpvZGl0RWRpdG9yIiwiSm9kaXRUZXh0RWRpdG9yIiwicGxhY2Vob2xkZXIiLCJlZGl0b3IiLCJjb250ZW50Iiwic2V0Q29udGVudCIsImNvbmZpZyIsInJlYWRvbmx5IiwiaGVpZ2h0IiwicmVmIiwidmFsdWUiLCJ0YWJJbmRleCIsIm9uQmx1ciIsIm5ld0NvbnRlbnQiLCJvbkNoYW5nZSIsImRpdiIsImNsYXNzTmFtZSIsIl9fIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout/joditTextEditor.jsx\n"));

/***/ })

});