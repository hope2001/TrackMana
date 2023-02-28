"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/controller/apiContext.js":
/*!**************************************!*\
  !*** ./src/controller/apiContext.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ApiContext\": function() { return /* binding */ ApiContext; },\n/* harmony export */   \"ApiProvider\": function() { return /* binding */ ApiProvider; },\n/* harmony export */   \"withApi\": function() { return /* binding */ withApi; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_Companies_companies_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/Companies/companies_services */ \"./src/services/Companies/companies_services.js\");\n/* harmony import */ var _requestParser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./requestParser */ \"./src/controller/requestParser.js\");\n/* harmony import */ var _src_services_accountServices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/src/services/accountServices */ \"./src/services/accountServices.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var _pages_categories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../pages/categories */ \"./pages/categories.jsx\");\n/* harmony import */ var _services_categories_Services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/categories_Services */ \"./src/services/categories_Services.js\");\n/* harmony import */ var _services_Projects_projects_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/Projects/projects_service */ \"./src/services/Projects/projects_service.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst ApiContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst ApiProvider = (param)=>{\n    let { children  } = param;\n    _s();\n    var _s1 = $RefreshSig$();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"John Doe\");\n    const [age, setAge] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const happyBirthday = ()=>setAge(age + 1);\n    const [categories, setcategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [TCategories, setTCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [projectsList, setprojectsList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [companies, setcompanies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isLoading, setisLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    // const activecompany = useRef('')\n    const [activecompany, setactivecompany] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // pour selectionner l'id de l'entreprise à effet de contexte general\n    const [loggedUser, setloggedUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    // company selection and fetching\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (typeof document !== \"undefined\" && _src_services_accountServices__WEBPACK_IMPORTED_MODULE_4__.accountService.isLogged() === true) {\n            // console.log(\"accountService.isLogged\", accountService.isLogged());\n            (async ()=>{\n                const { resultStatus , result , errorStatus , errorMessage  } = await (0,_requestParser__WEBPACK_IMPORTED_MODULE_3__.RequestToResponse)(await _services_Companies_companies_services__WEBPACK_IMPORTED_MODULE_2__.CompanieServices.getCompanies());\n                // console.log(resultStatus, result, errorStatus, errorMessage);\n                if (result !== null && resultStatus === \"OK\") {\n                    setcompanies(result);\n                }\n                setisLoading(false);\n            // result[0].id.value\n            // setactivecompany(\"fg\");\n            })();\n        }\n    }, [\n        _src_services_accountServices__WEBPACK_IMPORTED_MODULE_4__.accountService.isLogged()\n    ]);\n    //  get user info from local storage\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (_src_services_accountServices__WEBPACK_IMPORTED_MODULE_4__.accountService.isLogged()) {\n            setloggedUser(_src_services_accountServices__WEBPACK_IMPORTED_MODULE_4__.accountService.getConnectedUserInfo());\n        // console.log(accountService.getConnectedUserInfo());\n        }\n    }, []);\n    //** Toast*/\n    const showToastMessage = (message, type)=>{\n        if (type === \"success\") {\n            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.success(\"\".concat(message), {\n                position: react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.POSITION.TOP_RIGHT\n            });\n        } else if (type === \"warning\") {\n            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.warning(\"\".concat(message), {\n                position: react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.POSITION.TOP_RIGHT\n            });\n        } else if (type === \"error\") {\n            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error(\"\".concat(message), {\n                position: react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.POSITION.TOP_RIGHT\n            });\n        } else if (type === \"info\") {\n            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.info(\"\".concat(message), {\n                position: react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.POSITION.TOP_RIGHT\n            });\n        } else {\n            (0,react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast)(\"\".concat(message), {\n                position: react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.POSITION.TOP_RIGHT\n            });\n        }\n    };\n    _s1(()=>{\n        _s1();\n        let body = {};\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n            (async ()=>{\n                const { resultStatus , result , errorStatus , errorMessage  } = await (0,_requestParser__WEBPACK_IMPORTED_MODULE_3__.RequestToResponse)(await _services_categories_Services__WEBPACK_IMPORTED_MODULE_7__.categoriesService.getCategories(body));\n                // console.warn(\"if category\", resultStatus, result, errorStatus, errorMessage);\n                if (result !== null && resultStatus === \"OK\") {\n                    setcategories(result), setisLoading(false);\n                }\n            })();\n        }, []);\n    }, \"OD7bBpZva5O2jO+Puf00hKivP7c=\")();\n    /** task categories */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let body = {};\n        (async ()=>{\n            const { resultStatus , result , errorStatus , errorMessage  } = await (0,_requestParser__WEBPACK_IMPORTED_MODULE_3__.RequestToResponse)(await _services_categories_Services__WEBPACK_IMPORTED_MODULE_7__.categoriesTaskService.getTaskCategories(body));\n            // console.warn(\"if\", resultStatus, result, errorStatus, errorMessage);\n            if (result !== null && resultStatus === \"OK\") {\n                setTCategories(result), setisLoading(false);\n            }\n        })();\n    }, []);\n    /**fetch all projects**/ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let body = {};\n        (async ()=>{\n            const { resultStatus , result , errorStatus , errorMessage  } = await (0,_requestParser__WEBPACK_IMPORTED_MODULE_3__.RequestToResponse)(await _services_Projects_projects_service__WEBPACK_IMPORTED_MODULE_8__.ProjectService.getAllProjects(body));\n            console.warn(\"if\", resultStatus, result, errorStatus, errorMessage);\n            if (result !== null && resultStatus === \"OK\") {\n                setprojectsList(result);\n            // console.warn(result);\n            } else console.log(\"No result\");\n        })();\n    }, []);\n    /**fetch all projects**/ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let body = {};\n        (async ()=>{\n            const { resultStatus , result , errorStatus , errorMessage  } = await (0,_requestParser__WEBPACK_IMPORTED_MODULE_3__.RequestToResponse)(await _services_Projects_projects_service__WEBPACK_IMPORTED_MODULE_8__.ProjectService.getAllProjects(body));\n            console.warn(\"if\", resultStatus, result, errorStatus, errorMessage);\n            if (result !== null && resultStatus === \"OK\") {\n                setprojectsList(result);\n            // console.warn(result);\n            } else console.log(\"No result\");\n        })();\n    }, []);\n    // fetch projects members\n    // function fetchProjectMember(id) {\n    //   alert(id)\n    //   if (id) {\n    //     let body = { id: id };\n    //     (async () => {\n    //       const { resultStatus, result, errorStatus, errorMessage } =\n    //         await RequestToResponse(await ProjectService.getAllProjects(body));\n    //       console.warn(\"if\", resultStatus, result, errorStatus, errorMessage);\n    //       if (result !== null && resultStatus === \"OK\" && !!id) {\n    //         // const Projects = result\n    //         // console.warn(result);\n    //         let projectList = result[0].ProjectMembers;\n    //         // let projectList = result.map((p) => p.ProjectMembers);\n    //         // alert(JSON.stringify(projectList));\n    //         console.log(\"Project list---------------->\",projectList);\n    //         return projectList;\n    //       } else alert(\"No result\");\n    //     })();\n    //   }\n    // }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ApiContext.Provider, {\n        value: {\n            name,\n            age,\n            happyBirthday,\n            showToastMessage,\n            companies,\n            activecompany,\n            setactivecompany,\n            categories,\n            TCategories,\n            projectsList,\n            isLoading,\n            loggedUser\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\HopeCode\\\\TrackMana\\\\src\\\\controller\\\\apiContext.js\",\n        lineNumber: 165,\n        columnNumber: 5\n    }, undefined));\n};\n_s(ApiProvider, \"4e5CkF+hlS/U2XfNiZv6428iF6M=\");\n_c = ApiProvider;\nconst withApi = (Child)=>(props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ApiContext.Consumer, {\n            children: (context)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Child, {\n                    ...props,\n                    ...context\n                }, void 0, false, {\n                    fileName: \"C:\\\\HopeCode\\\\TrackMana\\\\src\\\\controller\\\\apiContext.js\",\n                    lineNumber: 189,\n                    columnNumber: 21\n                }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\HopeCode\\\\TrackMana\\\\src\\\\controller\\\\apiContext.js\",\n            lineNumber: 188,\n            columnNumber: 5\n        }, undefined);\n\nvar _c;\n$RefreshReg$(_c, \"ApiProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udHJvbGxlci9hcGlDb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTBFO0FBQ0U7QUFDeEI7QUFDWTtBQUV6QjtBQUNXO0FBSVQ7QUFDOEI7QUFDaEUsTUFBTWEsMkJBQWFaLG9EQUFhQSxDQUFDLENBQUMsR0FBRztBQUU1QyxNQUFNYSxjQUFjLFNBQWtCO1FBQWpCLEVBQUVDLFNBQVEsRUFBRTs7O0lBQy9CLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNlLEtBQUtDLE9BQU8sR0FBR2hCLCtDQUFRQSxDQUFDO0lBQy9CLE1BQU1pQixnQkFBZ0IsSUFBTUQsT0FBT0QsTUFBTTtJQUN6QyxNQUFNLENBQUNHLFlBQVlDLGNBQWMsR0FBR25CLCtDQUFRQSxDQUFDLEVBQUU7SUFDL0MsTUFBTSxDQUFDb0IsYUFBYUMsZUFBZSxHQUFHckIsK0NBQVFBLENBQUMsRUFBRTtJQUNqRCxNQUFNLENBQUNzQixjQUFjQyxnQkFBZ0IsR0FBR3ZCLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkQsTUFBTSxDQUFDd0IsV0FBV0MsYUFBYSxHQUFHekIsK0NBQVFBLENBQUMsRUFBRTtJQUM3QyxNQUFNLENBQUMwQixXQUFXQyxhQUFhLEdBQUczQiwrQ0FBUUEsQ0FBQyxJQUFJO0lBQy9DLG1DQUFtQztJQUNuQyxNQUFNLENBQUM0QixlQUFlQyxpQkFBaUIsR0FBRzdCLCtDQUFRQSxDQUFDLEtBQUsscUVBQXFFO0lBQzdILE1BQU0sQ0FBQzhCLFlBQVlDLGNBQWMsR0FBRy9CLCtDQUFRQSxDQUFDLENBQUM7SUFFOUMsaUNBQWlDO0lBQ2pDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSSxPQUFPaUMsYUFBYSxlQUFlNUIsa0ZBQXVCLE9BQU8sSUFBSSxFQUFFO1lBQ3pFLHFFQUFxRTtZQUNwRSxXQUFZO2dCQUNYLE1BQU0sRUFBRThCLGFBQVksRUFBRUMsT0FBTSxFQUFFQyxZQUFXLEVBQUVDLGFBQVksRUFBRSxHQUN2RCxNQUFNbEMsaUVBQWlCQSxDQUFDLE1BQU1ELGlHQUE2QjtnQkFDN0QsZ0VBQWdFO2dCQUNoRSxJQUFJaUMsV0FBVyxJQUFJLElBQUlELGlCQUFpQixNQUFNO29CQUM1Q1QsYUFBYVU7Z0JBQ2YsQ0FBQztnQkFDRFIsYUFBYSxLQUFLO1lBQ2xCLHFCQUFxQjtZQUNyQiwwQkFBMEI7WUFDNUI7UUFDRixDQUFDO0lBQ0gsR0FBRztRQUFDdkIsa0ZBQXVCO0tBQUc7SUFFOUIsb0NBQW9DO0lBQ3BDTCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSUssa0ZBQXVCLElBQUk7WUFDN0IyQixjQUFjM0IsOEZBQW1DO1FBQ2pELHNEQUFzRDtRQUN4RCxDQUFDO0lBQ0gsR0FBRyxFQUFFO0lBRUwsWUFBWTtJQUNaLE1BQU1vQyxtQkFBbUIsQ0FBQ0MsU0FBU0MsT0FBUztRQUMxQyxJQUFJQSxTQUFTLFdBQVc7WUFDdEJyQyx5REFBYSxDQUFDLEdBQVcsT0FBUm9DLFVBQVc7Z0JBQzFCRyxVQUFVdkMsb0VBQXdCO1lBQ3BDO1FBQ0YsT0FBTyxJQUFJcUMsU0FBUyxXQUFXO1lBQzdCckMseURBQWEsQ0FBQyxHQUFXLE9BQVJvQyxVQUFXO2dCQUMxQkcsVUFBVXZDLG9FQUF3QjtZQUNwQztRQUNGLE9BQU8sSUFBSXFDLFNBQVMsU0FBUztZQUMzQnJDLHVEQUFXLENBQUMsR0FBVyxPQUFSb0MsVUFBVztnQkFDeEJHLFVBQVV2QyxvRUFBd0I7WUFDcEM7UUFDRixPQUFPLElBQUlxQyxTQUFTLFFBQVE7WUFDMUJyQyxzREFBVSxDQUFDLEdBQVcsT0FBUm9DLFVBQVc7Z0JBQ3ZCRyxVQUFVdkMsb0VBQXdCO1lBQ3BDO1FBQ0YsT0FBTztZQUNMQSxxREFBS0EsQ0FBQyxHQUFXLE9BQVJvQyxVQUFXO2dCQUNsQkcsVUFBVXZDLG9FQUF3QjtZQUNwQztRQUNGLENBQUM7SUFDSDtJQUdBLElBQUMsSUFBTTs7UUFDTCxJQUFJNkMsT0FBTyxDQUFDO1FBQ1puRCxnREFBU0EsQ0FBQyxJQUFNO1lBQ2IsV0FBWTtnQkFDWCxNQUFNLEVBQUVtQyxhQUFZLEVBQUVDLE9BQU0sRUFBRUMsWUFBVyxFQUFFQyxhQUFZLEVBQUUsR0FDdkQsTUFBTWxDLGlFQUFpQkEsQ0FBQyxNQUFNSSwwRkFBK0IsQ0FBQzJDO2dCQUNoRSxnRkFBZ0Y7Z0JBRWhGLElBQUlmLFdBQVcsSUFBSSxJQUFJRCxpQkFBaUIsTUFBTTtvQkFDNUNmLGNBQWNnQixTQUFTUixhQUFhLEtBQUssQ0FBQztnQkFDNUMsQ0FBQztZQUNIO1FBQ0YsR0FBRyxFQUFFO0lBQ1A7SUFFQSxvQkFBb0IsR0FDcEI1QixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSW1ELE9BQU8sQ0FBQztRQUNYLFdBQVk7WUFDWCxNQUFNLEVBQUVoQixhQUFZLEVBQUVDLE9BQU0sRUFBRUMsWUFBVyxFQUFFQyxhQUFZLEVBQUUsR0FDdkQsTUFBTWxDLGlFQUFpQkEsQ0FDckIsTUFBTUssa0dBQXVDLENBQUMwQztZQUVsRCx1RUFBdUU7WUFFdkUsSUFBSWYsV0FBVyxJQUFJLElBQUlELGlCQUFpQixNQUFNO2dCQUM1Q2IsZUFBZWMsU0FBU1IsYUFBYSxLQUFLLENBQUM7WUFDN0MsQ0FBQztRQUNIO0lBQ0YsR0FBRyxFQUFFO0lBRUwsc0JBQXNCLEdBQ3RCNUIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUltRCxPQUFPLENBQUM7UUFDWCxXQUFZO1lBQ1gsTUFBTSxFQUFFaEIsYUFBWSxFQUFFQyxPQUFNLEVBQUVDLFlBQVcsRUFBRUMsYUFBWSxFQUFFLEdBQ3ZELE1BQU1sQyxpRUFBaUJBLENBQUMsTUFBTU0sOEZBQTZCLENBQUN5QztZQUM5REksUUFBUUMsSUFBSSxDQUFDLE1BQU1yQixjQUFjQyxRQUFRQyxhQUFhQztZQUV0RCxJQUFJRixXQUFXLElBQUksSUFBSUQsaUJBQWlCLE1BQU07Z0JBQzVDWCxnQkFBZ0JZO1lBQ2hCLHdCQUF3QjtZQUMxQixPQUFPbUIsUUFBUUUsR0FBRyxDQUFDO1FBQ3JCO0lBQ0YsR0FBRyxFQUFFO0lBR0gsc0JBQXNCLEdBQ3RCekQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUltRCxPQUFPLENBQUM7UUFDWCxXQUFZO1lBQ1gsTUFBTSxFQUFFaEIsYUFBWSxFQUFFQyxPQUFNLEVBQUVDLFlBQVcsRUFBRUMsYUFBWSxFQUFFLEdBQ3ZELE1BQU1sQyxpRUFBaUJBLENBQUMsTUFBTU0sOEZBQTZCLENBQUN5QztZQUM5REksUUFBUUMsSUFBSSxDQUFDLE1BQU1yQixjQUFjQyxRQUFRQyxhQUFhQztZQUV0RCxJQUFJRixXQUFXLElBQUksSUFBSUQsaUJBQWlCLE1BQU07Z0JBQzVDWCxnQkFBZ0JZO1lBQ2hCLHdCQUF3QjtZQUMxQixPQUFPbUIsUUFBUUUsR0FBRyxDQUFDO1FBQ3JCO0lBQ0YsR0FBRyxFQUFFO0lBRVAseUJBQXlCO0lBQ3pCLG9DQUFvQztJQUNwQyxjQUFjO0lBQ2QsY0FBYztJQUNkLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsb0VBQW9FO0lBQ3BFLDhFQUE4RTtJQUM5RSw2RUFBNkU7SUFDN0UsZ0VBQWdFO0lBQ2hFLHFDQUFxQztJQUNyQyxtQ0FBbUM7SUFDbkMsc0RBQXNEO0lBQ3RELG9FQUFvRTtJQUNwRSxpREFBaUQ7SUFDakQsb0VBQW9FO0lBQ3BFLDhCQUE4QjtJQUM5QixtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLE1BQU07SUFDTixJQUFJO0lBRUoscUJBQ0UsOERBQUM5QyxXQUFXK0MsUUFBUTtRQUNsQkMsT0FBTztZQUNMN0M7WUFDQUU7WUFDQUU7WUFDQXVCO1lBQ0FoQjtZQUNBSTtZQUNBQztZQUNBWDtZQUNBRTtZQUNBRTtZQUNBSTtZQUNBSTtRQUNGO2tCQUVDbEI7Ozs7OztBQUdQO0dBektNRDtLQUFBQTtBQTJLTixNQUFNZ0QsVUFBVSxDQUFDQyxRQUFVLENBQUNDLHNCQUV4Qiw4REFBQ25ELFdBQVdvRCxRQUFRO3NCQUNqQixDQUFDQyx3QkFBWSw4REFBQ0g7b0JBQU8sR0FBR0MsS0FBSztvQkFBRyxHQUFHRSxPQUFPOzs7Ozs7Ozs7OztBQUtqQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udHJvbGxlci9hcGlDb250ZXh0LmpzP2YwNzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb21wYW5pZVNlcnZpY2VzIH0gZnJvbSBcIi4uL3NlcnZpY2VzL0NvbXBhbmllcy9jb21wYW5pZXNfc2VydmljZXNcIjtcclxuaW1wb3J0IHsgUmVxdWVzdFRvUmVzcG9uc2UgfSBmcm9tIFwiLi9yZXF1ZXN0UGFyc2VyXCI7XHJcbmltcG9ydCB7IGFjY291bnRTZXJ2aWNlIH0gZnJvbSBcIkAvc3JjL3NlcnZpY2VzL2FjY291bnRTZXJ2aWNlc1wiO1xyXG5cclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuaW1wb3J0IENhdGVnb3JpZXMgZnJvbSBcIi4vLi4vLi4vcGFnZXMvY2F0ZWdvcmllc1wiO1xyXG5pbXBvcnQge1xyXG4gIGNhdGVnb3JpZXNTZXJ2aWNlLFxyXG4gIGNhdGVnb3JpZXNUYXNrU2VydmljZSxcclxufSBmcm9tIFwiLi4vc2VydmljZXMvY2F0ZWdvcmllc19TZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBQcm9qZWN0U2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9Qcm9qZWN0cy9wcm9qZWN0c19zZXJ2aWNlXCI7XHJcbmV4cG9ydCBjb25zdCBBcGlDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7XHJcblxyXG5jb25zdCBBcGlQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIkpvaG4gRG9lXCIpO1xyXG4gIGNvbnN0IFthZ2UsIHNldEFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBoYXBweUJpcnRoZGF5ID0gKCkgPT4gc2V0QWdlKGFnZSArIDEpO1xyXG4gIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRjYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbVENhdGVnb3JpZXMsIHNldFRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcHJvamVjdHNMaXN0LCBzZXRwcm9qZWN0c0xpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjb21wYW5pZXMsIHNldGNvbXBhbmllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0aXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIC8vIGNvbnN0IGFjdGl2ZWNvbXBhbnkgPSB1c2VSZWYoJycpXHJcbiAgY29uc3QgW2FjdGl2ZWNvbXBhbnksIHNldGFjdGl2ZWNvbXBhbnldID0gdXNlU3RhdGUoXCJcIik7IC8vIHBvdXIgc2VsZWN0aW9ubmVyIGwnaWQgZGUgbCdlbnRyZXByaXNlIMOgIGVmZmV0IGRlIGNvbnRleHRlIGdlbmVyYWxcclxuICBjb25zdCBbbG9nZ2VkVXNlciwgc2V0bG9nZ2VkVXNlcl0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gIC8vIGNvbXBhbnkgc2VsZWN0aW9uIGFuZCBmZXRjaGluZ1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiICYmIGFjY291bnRTZXJ2aWNlLmlzTG9nZ2VkKCkgPT09IHRydWUpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJhY2NvdW50U2VydmljZS5pc0xvZ2dlZFwiLCBhY2NvdW50U2VydmljZS5pc0xvZ2dlZCgpKTtcclxuICAgICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IHJlc3VsdFN0YXR1cywgcmVzdWx0LCBlcnJvclN0YXR1cywgZXJyb3JNZXNzYWdlIH0gPVxyXG4gICAgICAgICAgYXdhaXQgUmVxdWVzdFRvUmVzcG9uc2UoYXdhaXQgQ29tcGFuaWVTZXJ2aWNlcy5nZXRDb21wYW5pZXMoKSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0U3RhdHVzLCByZXN1bHQsIGVycm9yU3RhdHVzLCBlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgIGlmIChyZXN1bHQgIT09IG51bGwgJiYgcmVzdWx0U3RhdHVzID09PSBcIk9LXCIpIHtcclxuICAgICAgICAgIHNldGNvbXBhbmllcyhyZXN1bHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRpc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIC8vIHJlc3VsdFswXS5pZC52YWx1ZVxyXG4gICAgICAgIC8vIHNldGFjdGl2ZWNvbXBhbnkoXCJmZ1wiKTtcclxuICAgICAgfSkoKTtcclxuICAgIH1cclxuICB9LCBbYWNjb3VudFNlcnZpY2UuaXNMb2dnZWQoKV0pO1xyXG5cclxuICAvLyAgZ2V0IHVzZXIgaW5mbyBmcm9tIGxvY2FsIHN0b3JhZ2VcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGFjY291bnRTZXJ2aWNlLmlzTG9nZ2VkKCkpIHtcclxuICAgICAgc2V0bG9nZ2VkVXNlcihhY2NvdW50U2VydmljZS5nZXRDb25uZWN0ZWRVc2VySW5mbygpKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coYWNjb3VudFNlcnZpY2UuZ2V0Q29ubmVjdGVkVXNlckluZm8oKSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyoqIFRvYXN0Ki9cclxuICBjb25zdCBzaG93VG9hc3RNZXNzYWdlID0gKG1lc3NhZ2UsIHR5cGUpID0+IHtcclxuICAgIGlmICh0eXBlID09PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICB0b2FzdC5zdWNjZXNzKGAke21lc3NhZ2V9YCwge1xyXG4gICAgICAgIHBvc2l0aW9uOiB0b2FzdC5QT1NJVElPTi5UT1BfUklHSFQsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcIndhcm5pbmdcIikge1xyXG4gICAgICB0b2FzdC53YXJuaW5nKGAke21lc3NhZ2V9YCwge1xyXG4gICAgICAgIHBvc2l0aW9uOiB0b2FzdC5QT1NJVElPTi5UT1BfUklHSFQsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcImVycm9yXCIpIHtcclxuICAgICAgdG9hc3QuZXJyb3IoYCR7bWVzc2FnZX1gLCB7XHJcbiAgICAgICAgcG9zaXRpb246IHRvYXN0LlBPU0lUSU9OLlRPUF9SSUdIVCxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiaW5mb1wiKSB7XHJcbiAgICAgIHRvYXN0LmluZm8oYCR7bWVzc2FnZX1gLCB7XHJcbiAgICAgICAgcG9zaXRpb246IHRvYXN0LlBPU0lUSU9OLlRPUF9SSUdIVCxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0b2FzdChgJHttZXNzYWdlfWAsIHtcclxuICAgICAgICBwb3NpdGlvbjogdG9hc3QuUE9TSVRJT04uVE9QX1JJR0hULFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyAgQ2F0ZWdvcmllcyBmb3IgcHJvamVjdFxyXG4gICgoKSA9PiB7XHJcbiAgICBsZXQgYm9keSA9IHt9O1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IHJlc3VsdFN0YXR1cywgcmVzdWx0LCBlcnJvclN0YXR1cywgZXJyb3JNZXNzYWdlIH0gPVxyXG4gICAgICAgICAgYXdhaXQgUmVxdWVzdFRvUmVzcG9uc2UoYXdhaXQgY2F0ZWdvcmllc1NlcnZpY2UuZ2V0Q2F0ZWdvcmllcyhib2R5KSk7XHJcbiAgICAgICAgLy8gY29uc29sZS53YXJuKFwiaWYgY2F0ZWdvcnlcIiwgcmVzdWx0U3RhdHVzLCByZXN1bHQsIGVycm9yU3RhdHVzLCBlcnJvck1lc3NhZ2UpO1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0ICE9PSBudWxsICYmIHJlc3VsdFN0YXR1cyA9PT0gXCJPS1wiKSB7XHJcbiAgICAgICAgICBzZXRjYXRlZ29yaWVzKHJlc3VsdCksIHNldGlzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KSgpO1xyXG4gICAgfSwgW10pO1xyXG4gIH0pKCk7XHJcblxyXG4gIC8qKiB0YXNrIGNhdGVnb3JpZXMgKi9cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGJvZHkgPSB7fTtcclxuICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgcmVzdWx0U3RhdHVzLCByZXN1bHQsIGVycm9yU3RhdHVzLCBlcnJvck1lc3NhZ2UgfSA9XHJcbiAgICAgICAgYXdhaXQgUmVxdWVzdFRvUmVzcG9uc2UoXHJcbiAgICAgICAgICBhd2FpdCBjYXRlZ29yaWVzVGFza1NlcnZpY2UuZ2V0VGFza0NhdGVnb3JpZXMoYm9keSlcclxuICAgICAgICApO1xyXG4gICAgICAvLyBjb25zb2xlLndhcm4oXCJpZlwiLCByZXN1bHRTdGF0dXMsIHJlc3VsdCwgZXJyb3JTdGF0dXMsIGVycm9yTWVzc2FnZSk7XHJcblxyXG4gICAgICBpZiAocmVzdWx0ICE9PSBudWxsICYmIHJlc3VsdFN0YXR1cyA9PT0gXCJPS1wiKSB7XHJcbiAgICAgICAgc2V0VENhdGVnb3JpZXMocmVzdWx0KSwgc2V0aXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfSkoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8qKmZldGNoIGFsbCBwcm9qZWN0cyoqL1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgYm9keSA9IHt9O1xyXG4gICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgeyByZXN1bHRTdGF0dXMsIHJlc3VsdCwgZXJyb3JTdGF0dXMsIGVycm9yTWVzc2FnZSB9ID1cclxuICAgICAgICBhd2FpdCBSZXF1ZXN0VG9SZXNwb25zZShhd2FpdCBQcm9qZWN0U2VydmljZS5nZXRBbGxQcm9qZWN0cyhib2R5KSk7XHJcbiAgICAgIGNvbnNvbGUud2FybihcImlmXCIsIHJlc3VsdFN0YXR1cywgcmVzdWx0LCBlcnJvclN0YXR1cywgZXJyb3JNZXNzYWdlKTtcclxuXHJcbiAgICAgIGlmIChyZXN1bHQgIT09IG51bGwgJiYgcmVzdWx0U3RhdHVzID09PSBcIk9LXCIpIHtcclxuICAgICAgICBzZXRwcm9qZWN0c0xpc3QocmVzdWx0KTtcclxuICAgICAgICAvLyBjb25zb2xlLndhcm4ocmVzdWx0KTtcclxuICAgICAgfSBlbHNlIGNvbnNvbGUubG9nKFwiTm8gcmVzdWx0XCIpO1xyXG4gICAgfSkoKTtcclxuICB9LCBbXSk7XHJcblxyXG5cclxuICAgIC8qKmZldGNoIGFsbCBwcm9qZWN0cyoqL1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgbGV0IGJvZHkgPSB7fTtcclxuICAgICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IHJlc3VsdFN0YXR1cywgcmVzdWx0LCBlcnJvclN0YXR1cywgZXJyb3JNZXNzYWdlIH0gPVxyXG4gICAgICAgICAgYXdhaXQgUmVxdWVzdFRvUmVzcG9uc2UoYXdhaXQgUHJvamVjdFNlcnZpY2UuZ2V0QWxsUHJvamVjdHMoYm9keSkpO1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcImlmXCIsIHJlc3VsdFN0YXR1cywgcmVzdWx0LCBlcnJvclN0YXR1cywgZXJyb3JNZXNzYWdlKTtcclxuICBcclxuICAgICAgICBpZiAocmVzdWx0ICE9PSBudWxsICYmIHJlc3VsdFN0YXR1cyA9PT0gXCJPS1wiKSB7XHJcbiAgICAgICAgICBzZXRwcm9qZWN0c0xpc3QocmVzdWx0KTtcclxuICAgICAgICAgIC8vIGNvbnNvbGUud2FybihyZXN1bHQpO1xyXG4gICAgICAgIH0gZWxzZSBjb25zb2xlLmxvZyhcIk5vIHJlc3VsdFwiKTtcclxuICAgICAgfSkoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgLy8gZmV0Y2ggcHJvamVjdHMgbWVtYmVyc1xyXG4gIC8vIGZ1bmN0aW9uIGZldGNoUHJvamVjdE1lbWJlcihpZCkge1xyXG4gIC8vICAgYWxlcnQoaWQpXHJcbiAgLy8gICBpZiAoaWQpIHtcclxuICAvLyAgICAgbGV0IGJvZHkgPSB7IGlkOiBpZCB9O1xyXG4gIC8vICAgICAoYXN5bmMgKCkgPT4ge1xyXG4gIC8vICAgICAgIGNvbnN0IHsgcmVzdWx0U3RhdHVzLCByZXN1bHQsIGVycm9yU3RhdHVzLCBlcnJvck1lc3NhZ2UgfSA9XHJcbiAgLy8gICAgICAgICBhd2FpdCBSZXF1ZXN0VG9SZXNwb25zZShhd2FpdCBQcm9qZWN0U2VydmljZS5nZXRBbGxQcm9qZWN0cyhib2R5KSk7XHJcbiAgLy8gICAgICAgY29uc29sZS53YXJuKFwiaWZcIiwgcmVzdWx0U3RhdHVzLCByZXN1bHQsIGVycm9yU3RhdHVzLCBlcnJvck1lc3NhZ2UpO1xyXG4gIC8vICAgICAgIGlmIChyZXN1bHQgIT09IG51bGwgJiYgcmVzdWx0U3RhdHVzID09PSBcIk9LXCIgJiYgISFpZCkge1xyXG4gIC8vICAgICAgICAgLy8gY29uc3QgUHJvamVjdHMgPSByZXN1bHRcclxuICAvLyAgICAgICAgIC8vIGNvbnNvbGUud2FybihyZXN1bHQpO1xyXG4gIC8vICAgICAgICAgbGV0IHByb2plY3RMaXN0ID0gcmVzdWx0WzBdLlByb2plY3RNZW1iZXJzO1xyXG4gIC8vICAgICAgICAgLy8gbGV0IHByb2plY3RMaXN0ID0gcmVzdWx0Lm1hcCgocCkgPT4gcC5Qcm9qZWN0TWVtYmVycyk7XHJcbiAgLy8gICAgICAgICAvLyBhbGVydChKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xyXG4gIC8vICAgICAgICAgY29uc29sZS5sb2coXCJQcm9qZWN0IGxpc3QtLS0tLS0tLS0tLS0tLS0tPlwiLHByb2plY3RMaXN0KTtcclxuICAvLyAgICAgICAgIHJldHVybiBwcm9qZWN0TGlzdDtcclxuICAvLyAgICAgICB9IGVsc2UgYWxlcnQoXCJObyByZXN1bHRcIik7XHJcbiAgLy8gICAgIH0pKCk7XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFwaUNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGFnZSxcclxuICAgICAgICBoYXBweUJpcnRoZGF5LFxyXG4gICAgICAgIHNob3dUb2FzdE1lc3NhZ2UsXHJcbiAgICAgICAgY29tcGFuaWVzLFxyXG4gICAgICAgIGFjdGl2ZWNvbXBhbnksXHJcbiAgICAgICAgc2V0YWN0aXZlY29tcGFueSxcclxuICAgICAgICBjYXRlZ29yaWVzLFxyXG4gICAgICAgIFRDYXRlZ29yaWVzLFxyXG4gICAgICAgIHByb2plY3RzTGlzdCxcclxuICAgICAgICBpc0xvYWRpbmcsXHJcbiAgICAgICAgbG9nZ2VkVXNlcixcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9BcGlDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCB3aXRoQXBpID0gKENoaWxkKSA9PiAocHJvcHMpID0+XHJcbiAgKFxyXG4gICAgPEFwaUNvbnRleHQuQ29uc3VtZXI+XHJcbiAgICAgIHsoY29udGV4dCkgPT4gPENoaWxkIHsuLi5wcm9wc30gey4uLmNvbnRleHR9IC8+fVxyXG4gICAgICB7LyogQW5vdGhlciBvcHRpb24gaXM6ICB7Y29udGV4dCA9PiA8Q2hpbGQgey4uLnByb3BzfSBjb250ZXh0PXtjb250ZXh0fS8+fSovfVxyXG4gICAgPC9BcGlDb250ZXh0LkNvbnN1bWVyPlxyXG4gICk7XHJcblxyXG5leHBvcnQgeyBBcGlQcm92aWRlciwgd2l0aEFwaSB9O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJDb21wYW5pZVNlcnZpY2VzIiwiUmVxdWVzdFRvUmVzcG9uc2UiLCJhY2NvdW50U2VydmljZSIsInRvYXN0IiwiQ2F0ZWdvcmllcyIsImNhdGVnb3JpZXNTZXJ2aWNlIiwiY2F0ZWdvcmllc1Rhc2tTZXJ2aWNlIiwiUHJvamVjdFNlcnZpY2UiLCJBcGlDb250ZXh0IiwiQXBpUHJvdmlkZXIiLCJjaGlsZHJlbiIsIm5hbWUiLCJzZXROYW1lIiwiYWdlIiwic2V0QWdlIiwiaGFwcHlCaXJ0aGRheSIsImNhdGVnb3JpZXMiLCJzZXRjYXRlZ29yaWVzIiwiVENhdGVnb3JpZXMiLCJzZXRUQ2F0ZWdvcmllcyIsInByb2plY3RzTGlzdCIsInNldHByb2plY3RzTGlzdCIsImNvbXBhbmllcyIsInNldGNvbXBhbmllcyIsImlzTG9hZGluZyIsInNldGlzTG9hZGluZyIsImFjdGl2ZWNvbXBhbnkiLCJzZXRhY3RpdmVjb21wYW55IiwibG9nZ2VkVXNlciIsInNldGxvZ2dlZFVzZXIiLCJkb2N1bWVudCIsImlzTG9nZ2VkIiwicmVzdWx0U3RhdHVzIiwicmVzdWx0IiwiZXJyb3JTdGF0dXMiLCJlcnJvck1lc3NhZ2UiLCJnZXRDb21wYW5pZXMiLCJnZXRDb25uZWN0ZWRVc2VySW5mbyIsInNob3dUb2FzdE1lc3NhZ2UiLCJtZXNzYWdlIiwidHlwZSIsInN1Y2Nlc3MiLCJwb3NpdGlvbiIsIlBPU0lUSU9OIiwiVE9QX1JJR0hUIiwid2FybmluZyIsImVycm9yIiwiaW5mbyIsImJvZHkiLCJnZXRDYXRlZ29yaWVzIiwiZ2V0VGFza0NhdGVnb3JpZXMiLCJnZXRBbGxQcm9qZWN0cyIsImNvbnNvbGUiLCJ3YXJuIiwibG9nIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIndpdGhBcGkiLCJDaGlsZCIsInByb3BzIiwiQ29uc3VtZXIiLCJjb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/controller/apiContext.js\n"));

/***/ })

});