"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Loadpage = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const onLoadpageClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        router.push(\"/homepage\");\n    }, [\n        router\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const scrollAnimElements = document.querySelectorAll(\"[data-animate-on-scroll]\");\n        const observer = new IntersectionObserver((entries)=>{\n            for (const entry of entries){\n                if (entry.isIntersecting || entry.intersectionRatio > 0) {\n                    const targetElement = entry.target;\n                    targetElement.classList.add(\"animate\");\n                    observer.unobserve(targetElement);\n                }\n            }\n        }, {\n            threshold: 0.15\n        });\n        for(let i = 0; i < scrollAnimElements.length; i++){\n            observer.observe(scrollAnimElements[i]);\n        }\n        return ()=>{\n            for(let i = 0; i < scrollAnimElements.length; i++){\n                observer.unobserve(scrollAnimElements[i]);\n            }\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative bg-gray-1000 w-full h-[720px] overflow-y-auto cursor-pointer text-center text-2xl text-white font-space-grotesk\",\n        onClick: onLoadpageClick,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"absolute top-[0px] left-[0px] w-[1280px] h-[720px] object-cover\",\n                alt: \"\",\n                src: \"../anirudhxu4pz7gi9jyunsplash-1@2x.png\"\n            }, void 0, false, {\n                fileName: \"D:\\\\nextjs_tutorial\\\\Hacknitp5.0\\\\pages\\\\index.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"m-[0] absolute top-[502px] left-[319px] text-[inherit] font-medium font-inherit inline-block w-[642px] h-[48px] [&.animate]:animate-[4s_ease_0s_1_normal_forwards_fade-in] opacity-[0]\",\n                id: \"heading\",\n                \"data-animate-on-scroll\": true,\n                children: `Innovate Far & Beyond`\n            }, void 0, false, {\n                fileName: \"D:\\\\nextjs_tutorial\\\\Hacknitp5.0\\\\pages\\\\index.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"absolute h-[25.65%] w-[45.77%] top-[32.5%] right-[24.94%] bottom-[41.85%] left-[29.3%] max-w-full overflow-hidden max-h-full [&.animate]:animate-[4s_ease_0s_1_normal_forwards_fade-in-left] opacity-[0]\",\n                alt: \"\",\n                src: \"../hacknitp5.svg\",\n                \"data-animate-on-scroll\": true\n            }, void 0, false, {\n                fileName: \"D:\\\\nextjs_tutorial\\\\Hacknitp5.0\\\\pages\\\\index.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\nextjs_tutorial\\\\Hacknitp5.0\\\\pages\\\\index.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loadpage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBK0M7QUFDUDtBQUV4QyxNQUFNRyxRQUFRLEdBQUcsSUFBTTtJQUNyQixNQUFNQyxNQUFNLEdBQUdGLHNEQUFTLEVBQUU7SUFFMUIsTUFBTUcsZUFBZSxHQUFHTCxrREFBVyxDQUFDLElBQU07UUFDeENJLE1BQU0sQ0FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNCLENBQUMsRUFBRTtRQUFDRixNQUFNO0tBQUMsQ0FBQztJQUVaSCxnREFBUyxDQUFDLElBQU07UUFDZCxNQUFNTSxrQkFBa0IsR0FBR0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FDbEQsMEJBQTBCLENBQzNCO1FBQ0QsTUFBTUMsUUFBUSxHQUFHLElBQUlDLG9CQUFvQixDQUN2QyxDQUFDQyxPQUFPLEdBQUs7WUFDWCxLQUFLLE1BQU1DLEtBQUssSUFBSUQsT0FBTyxDQUFFO2dCQUMzQixJQUFJQyxLQUFLLENBQUNDLGNBQWMsSUFBSUQsS0FBSyxDQUFDRSxpQkFBaUIsR0FBRyxDQUFDLEVBQUU7b0JBQ3ZELE1BQU1DLGFBQWEsR0FBR0gsS0FBSyxDQUFDSSxNQUFNO29CQUNsQ0QsYUFBYSxDQUFDRSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDdkNULFFBQVEsQ0FBQ1UsU0FBUyxDQUFDSixhQUFhLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDLEVBQ0Q7WUFDRUssU0FBUyxFQUFFLElBQUk7U0FDaEIsQ0FDRjtRQUVELElBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHZixrQkFBa0IsQ0FBQ2dCLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLENBQUU7WUFDbERaLFFBQVEsQ0FBQ2MsT0FBTyxDQUFDakIsa0JBQWtCLENBQUNlLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUMsQ0FBQztRQUVELE9BQU8sSUFBTTtZQUNYLElBQUssSUFBSUEsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHZixrQkFBa0IsQ0FBQ2dCLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLENBQUU7Z0JBQ2xEWixRQUFRLENBQUNVLFNBQVMsQ0FBQ2Isa0JBQWtCLENBQUNlLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUMsQ0FBQztRQUNILENBQUMsQ0FBQztJQUNKLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLHFCQUNFLDhEQUFDRyxLQUFHO1FBQ0ZDLFNBQVMsRUFBQywwSEFBMEg7UUFDcElDLE9BQU8sRUFBRXRCLGVBQWU7OzBCQUV4Qiw4REFBQ3VCLEtBQUc7Z0JBQ0ZGLFNBQVMsRUFBQyxpRUFBaUU7Z0JBQzNFRyxHQUFHLEVBQUMsRUFBRTtnQkFDTkMsR0FBRyxFQUFDLHdDQUF3Qzs7Ozs7eUJBQzVDOzBCQUNGLDhEQUFDQyxJQUFFO2dCQUNETCxTQUFTLEVBQUMsd0xBQXdMO2dCQUNsTU0sRUFBRSxFQUFDLFNBQVM7Z0JBQ1pDLHdCQUFzQjswQkFDdEIsQ0FBQyxxQkFBcUIsQ0FBQzs7Ozs7eUJBQU07MEJBQy9CLDhEQUFDTCxLQUFHO2dCQUNGRixTQUFTLEVBQUMsME1BQTBNO2dCQUNwTkcsR0FBRyxFQUFDLEVBQUU7Z0JBQ05DLEdBQUcsRUFBQyxrQkFBa0I7Z0JBQ3RCRyx3QkFBc0I7Ozs7O3lCQUN0Qjs7Ozs7O2lCQUNFLENBQ047QUFDSixDQUFDO0FBRUQsaUVBQWU5QixRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYWNrbml0cDUuMC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IExvYWRwYWdlID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBvbkxvYWRwYWdlQ2xpY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgcm91dGVyLnB1c2goXCIvaG9tZXBhZ2VcIik7XG4gIH0sIFtyb3V0ZXJdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNjcm9sbEFuaW1FbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBcIltkYXRhLWFuaW1hdGUtb24tc2Nyb2xsXVwiXG4gICAgKTtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBlbnRyeS50YXJnZXQ7XG4gICAgICAgICAgICB0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlXCIpO1xuICAgICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKHRhcmdldEVsZW1lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGhyZXNob2xkOiAwLjE1LFxuICAgICAgfVxuICAgICk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNjcm9sbEFuaW1FbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShzY3JvbGxBbmltRWxlbWVudHNbaV0pO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNjcm9sbEFuaW1FbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoc2Nyb2xsQW5pbUVsZW1lbnRzW2ldKTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBiZy1ncmF5LTEwMDAgdy1mdWxsIGgtWzcyMHB4XSBvdmVyZmxvdy15LWF1dG8gY3Vyc29yLXBvaW50ZXIgdGV4dC1jZW50ZXIgdGV4dC0yeGwgdGV4dC13aGl0ZSBmb250LXNwYWNlLWdyb3Rlc2tcIlxuICAgICAgb25DbGljaz17b25Mb2FkcGFnZUNsaWNrfVxuICAgID5cbiAgICAgIDxpbWdcbiAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLVswcHhdIGxlZnQtWzBweF0gdy1bMTI4MHB4XSBoLVs3MjBweF0gb2JqZWN0LWNvdmVyXCJcbiAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgc3JjPVwiLi4vYW5pcnVkaHh1NHB6N2dpOWp5dW5zcGxhc2gtMUAyeC5wbmdcIlxuICAgICAgLz5cbiAgICAgIDxoM1xuICAgICAgICBjbGFzc05hbWU9XCJtLVswXSBhYnNvbHV0ZSB0b3AtWzUwMnB4XSBsZWZ0LVszMTlweF0gdGV4dC1baW5oZXJpdF0gZm9udC1tZWRpdW0gZm9udC1pbmhlcml0IGlubGluZS1ibG9jayB3LVs2NDJweF0gaC1bNDhweF0gWyYuYW5pbWF0ZV06YW5pbWF0ZS1bNHNfZWFzZV8wc18xX25vcm1hbF9mb3J3YXJkc19mYWRlLWluXSBvcGFjaXR5LVswXVwiXG4gICAgICAgIGlkPVwiaGVhZGluZ1wiXG4gICAgICAgIGRhdGEtYW5pbWF0ZS1vbi1zY3JvbGxcbiAgICAgID57YElubm92YXRlIEZhciAmIEJleW9uZGB9PC9oMz5cbiAgICAgIDxpbWdcbiAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaC1bMjUuNjUlXSB3LVs0NS43NyVdIHRvcC1bMzIuNSVdIHJpZ2h0LVsyNC45NCVdIGJvdHRvbS1bNDEuODUlXSBsZWZ0LVsyOS4zJV0gbWF4LXctZnVsbCBvdmVyZmxvdy1oaWRkZW4gbWF4LWgtZnVsbCBbJi5hbmltYXRlXTphbmltYXRlLVs0c19lYXNlXzBzXzFfbm9ybWFsX2ZvcndhcmRzX2ZhZGUtaW4tbGVmdF0gb3BhY2l0eS1bMF1cIlxuICAgICAgICBhbHQ9XCJcIlxuICAgICAgICBzcmM9XCIuLi9oYWNrbml0cDUuc3ZnXCJcbiAgICAgICAgZGF0YS1hbmltYXRlLW9uLXNjcm9sbFxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRwYWdlO1xuIl0sIm5hbWVzIjpbInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiTG9hZHBhZ2UiLCJyb3V0ZXIiLCJvbkxvYWRwYWdlQ2xpY2siLCJwdXNoIiwic2Nyb2xsQW5pbUVsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ0YXJnZXRFbGVtZW50IiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwidW5vYnNlcnZlIiwidGhyZXNob2xkIiwiaSIsImxlbmd0aCIsIm9ic2VydmUiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaW1nIiwiYWx0Iiwic3JjIiwiaDMiLCJpZCIsImRhdGEtYW5pbWF0ZS1vbi1zY3JvbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();