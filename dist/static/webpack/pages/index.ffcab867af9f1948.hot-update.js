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

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HeaderComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/styled-components */ \"./styles/styled-components.js\");\n/* harmony import */ var _mui_icons_material_LightMode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/LightMode */ \"./node_modules/@mui/icons-material/LightMode.js\");\n/* harmony import */ var _mui_icons_material_ModeNight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/ModeNight */ \"./node_modules/@mui/icons-material/ModeNight.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_image2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/image2.png */ \"./public/image2.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction HeaderComponent(props) {\n    _s();\n    const [isDay, setIsDay] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const linkRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const handleClick = ()=>{\n        if (isDay) {\n            props.changeFontColor(\"white\");\n            props.changeBgColor(\"black\");\n            setIsDay((prev)=>!prev);\n        } else {\n            props.changeFontColor(\"black\");\n            props.changeBgColor(\"white\");\n            setIsDay((prev)=>!prev);\n        }\n    };\n    const handleLinkClick = ()=>{\n        linkRef.current.classList.add(\"routing\");\n        setTimeout(()=>{\n            linkRef.current.classList.remove(\"routing\");\n            router.push(\"https://hongseungjae.info/\");\n        }, 1500);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_styled_components__WEBPACK_IMPORTED_MODULE_1__.Header, {\n        color: isDay ? \"white\" : \"black\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_styled_components__WEBPACK_IMPORTED_MODULE_1__.F4, {\n                children: \"홍승재의 이력서 | 포트폴리오\"\n            }, void 0, false, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/portfolio_notion/components/header.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        src: _public_image2_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        className: \"w-[2.5vw] h-[2.5vh] mr-6 mt-[0.2vh] cursor-pointer\",\n                        onClick: handleLinkClick\n                    }, void 0, false, {\n                        fileName: \"/Users/hongseungjae/Desktop/learning.js/portfolio_notion/components/header.js\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: linkRef,\n                        className: \"fixed rounded-full w-1 h-1 opacity-0\",\n                        style: {\n                            backgroundColor: \"#FEE832\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/hongseungjae/Desktop/learning.js/portfolio_notion/components/header.js\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, this),\n                    isDay ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ModeNight__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        className: \"text-black mr-6 cursor-pointer\",\n                        onClick: handleClick\n                    }, void 0, false, {\n                        fileName: \"/Users/hongseungjae/Desktop/learning.js/portfolio_notion/components/header.js\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_LightMode__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        className: \"text-white mr-6 cursor-pointer\",\n                        onClick: handleClick\n                    }, void 0, false, {\n                        fileName: \"/Users/hongseungjae/Desktop/learning.js/portfolio_notion/components/header.js\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/portfolio_notion/components/header.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hongseungjae/Desktop/learning.js/portfolio_notion/components/header.js\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, this);\n}\n_s(HeaderComponent, \"s2eI8wXVHiYS/mwZDJY7vs47mpU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = HeaderComponent;\nvar _c;\n$RefreshReg$(_c, \"HeaderComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0Q7QUFDRTtBQUNBO0FBQ047QUFDVjtBQUNYO0FBQ1M7QUFFekIsU0FBU1UsZ0JBQWdCQyxLQUFLOztJQUN6QyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBLENBQUM7SUFDbkMsTUFBTVUsVUFBVVQsNkNBQU1BLENBQUM7SUFDdkIsTUFBTVUsU0FBU04sc0RBQVNBO0lBRXhCLE1BQU1PLGNBQWM7UUFDaEIsSUFBR0osT0FBTztZQUNORCxNQUFNTSxlQUFlLENBQUM7WUFDdEJOLE1BQU1PLGFBQWEsQ0FBQztZQUNwQkwsU0FBU00sQ0FBQUEsT0FBUSxDQUFDQTtRQUN0QixPQUNLO1lBQ0RSLE1BQU1NLGVBQWUsQ0FBQztZQUN0Qk4sTUFBTU8sYUFBYSxDQUFDO1lBQ3BCTCxTQUFTTSxDQUFBQSxPQUFRLENBQUNBO1FBQ3RCO0lBQ0o7SUFFQSxNQUFNQyxrQkFBa0I7UUFDcEJOLFFBQVFPLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUM7UUFDOUJDLFdBQVc7WUFDUFYsUUFBUU8sT0FBTyxDQUFDQyxTQUFTLENBQUNHLE1BQU0sQ0FBQztZQUNqQ1YsT0FBT1csSUFBSSxDQUFDO1FBQ2hCLEdBQUc7SUFDUDtJQUVBLHFCQUNJLDhEQUFDekIsNkRBQU1BO1FBQUMwQixPQUFPZixRQUFRLFVBQVU7OzBCQUM3Qiw4REFBQ1oseURBQUVBOzBCQUFDOzs7Ozs7MEJBQ0osOERBQUM0QjtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNyQixtREFBS0E7d0JBQUNzQixLQUFLdkIsMERBQU1BO3dCQUFFc0IsV0FBVTt3QkFBcURFLFNBQVNYOzs7Ozs7a0NBQzVGLDhEQUFDUTt3QkFBSUksS0FBS2xCO3dCQUFTZSxXQUFVO3dCQUF1Q0ksT0FBTzs0QkFBQ0MsaUJBQWdCO3dCQUFTOzs7Ozs7b0JBQ3ZHdEIsc0JBQ0UsOERBQUNULHFFQUFhQTt3QkFBQzBCLFdBQVU7d0JBQWlDRSxTQUFTZjs7Ozs7NkNBRW5FLDhEQUFDZCxxRUFBYUE7d0JBQUMyQixXQUFVO3dCQUFpQ0UsU0FBU2Y7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtuRjtHQXhDd0JOOztRQUdMRCxrREFBU0E7OztLQUhKQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlYWRlci5qcz9jMDk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEY0LCBIZWFkZXIgfSBmcm9tIFwiQC9zdHlsZXMvc3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBMaWdodE1vZGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTGlnaHRNb2RlJztcbmltcG9ydCBNb2RlTmlnaHRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTW9kZU5pZ2h0JztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVybEltZyBmcm9tICcuLi9wdWJsaWMvaW1hZ2UyLnBuZyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXJDb21wb25lbnQocHJvcHMpIHtcbiAgICBjb25zdCBbaXNEYXksIHNldElzRGF5XSA9IHVzZVN0YXRlKHRydWUpO1xuICAgIGNvbnN0IGxpbmtSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgaWYoaXNEYXkpIHtcbiAgICAgICAgICAgIHByb3BzLmNoYW5nZUZvbnRDb2xvcihcIndoaXRlXCIpO1xuICAgICAgICAgICAgcHJvcHMuY2hhbmdlQmdDb2xvcihcImJsYWNrXCIpO1xuICAgICAgICAgICAgc2V0SXNEYXkocHJldiA9PiAhcHJldik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwcm9wcy5jaGFuZ2VGb250Q29sb3IoXCJibGFja1wiKTtcbiAgICAgICAgICAgIHByb3BzLmNoYW5nZUJnQ29sb3IoXCJ3aGl0ZVwiKTtcbiAgICAgICAgICAgIHNldElzRGF5KHByZXYgPT4gIXByZXYpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlTGlua0NsaWNrID0gKCkgPT4ge1xuICAgICAgICBsaW5rUmVmLmN1cnJlbnQuY2xhc3NMaXN0LmFkZCgncm91dGluZycpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGxpbmtSZWYuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKCdyb3V0aW5nJyk7XG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnaHR0cHM6Ly9ob25nc2V1bmdqYWUuaW5mby8nKTtcbiAgICAgICAgfSwgMTUwMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEhlYWRlciBjb2xvcj17aXNEYXkgPyAnd2hpdGUnIDogJ2JsYWNrJ30+XG4gICAgICAgICAgICA8RjQ+7ZmN7Iq57J6s7J2YIOydtOugpeyEnCB8IO2PrO2KuO2PtOumrOyYpDwvRjQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXt1cmxJbWd9IGNsYXNzTmFtZT1cInctWzIuNXZ3XSBoLVsyLjV2aF0gbXItNiBtdC1bMC4ydmhdIGN1cnNvci1wb2ludGVyXCIgb25DbGljaz17aGFuZGxlTGlua0NsaWNrfSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgcmVmPXtsaW5rUmVmfSBjbGFzc05hbWU9XCJmaXhlZCByb3VuZGVkLWZ1bGwgdy0xIGgtMSBvcGFjaXR5LTBcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjonI0ZFRTgzMid9fSAvPlxuICAgICAgICAgICAgeyBpc0RheSA/XG4gICAgICAgICAgICAgICAgPE1vZGVOaWdodEljb24gY2xhc3NOYW1lPVwidGV4dC1ibGFjayBtci02IGN1cnNvci1wb2ludGVyXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9IC8+XG4gICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgIDxMaWdodE1vZGVJY29uIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgbXItNiBjdXJzb3ItcG9pbnRlclwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSAgLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0hlYWRlcj5cbiAgICApXG59Il0sIm5hbWVzIjpbIkY0IiwiSGVhZGVyIiwiTGlnaHRNb2RlSWNvbiIsIk1vZGVOaWdodEljb24iLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsInVybEltZyIsIkltYWdlIiwidXNlUm91dGVyIiwiSGVhZGVyQ29tcG9uZW50IiwicHJvcHMiLCJpc0RheSIsInNldElzRGF5IiwibGlua1JlZiIsInJvdXRlciIsImhhbmRsZUNsaWNrIiwiY2hhbmdlRm9udENvbG9yIiwiY2hhbmdlQmdDb2xvciIsInByZXYiLCJoYW5kbGVMaW5rQ2xpY2siLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0VGltZW91dCIsInJlbW92ZSIsInB1c2giLCJjb2xvciIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsIm9uQ2xpY2siLCJyZWYiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/header.js\n"));

/***/ })

});