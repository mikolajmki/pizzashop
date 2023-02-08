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
exports.id = "pages/api/order";
exports.ids = ["pages/api/order"];
exports.modules = {

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ "(api)/./lib/client.js":
/*!***********************!*\
  !*** ./lib/client.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client),\n/* harmony export */   \"urlFor\": () => (/* binding */ urlFor)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst client = _sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({\n    projectId: \"gtn4i6c0\",\n    dataset: \"production\",\n    apiVersion: \"2023-01-03\",\n    useCdn: true,\n    token: \"skV5vXQpjW5HdZEP2Z3Bspm3KTJbXiYD2dCXf13Gr5NsNgc90G8BfvILkwKPLLqZi19TI5QQJlhcq7kPQjkSb8IQiyF3yDsSFBIYDu5K57xqNPIO1bqJUsTGVoYSbVqmUPw45ipURKRAsKw1cmJePD9Cdmbuw9dCpVE8LjTATCv9ugTTv1ZU\"\n});\nconst builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(client);\nconst urlFor = (source)=>builder.image(source);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvY2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQztBQUNNO0FBRXpDLE1BQU1FLFNBQVNGLHFEQUFZQSxDQUFDO0lBQy9CRyxXQUFXO0lBQ1hDLFNBQVM7SUFDVEMsWUFBWTtJQUNaQyxRQUFRLElBQUk7SUFDWkMsT0FBTztBQUNYLEdBQUc7QUFFSCxNQUFNQyxVQUFVUCx3REFBZUEsQ0FBQ0M7QUFFekIsTUFBTU8sU0FBUyxDQUFDQyxTQUFXRixRQUFRRyxLQUFLLENBQUNELFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waXp6YXNob3AvLi9saWIvY2xpZW50LmpzP2U2OWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNhbml0eUNsaWVudCBmcm9tICdAc2FuaXR5L2NsaWVudCc7XHJcbmltcG9ydCBJbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNsaWVudCA9IHNhbml0eUNsaWVudCh7XHJcbiAgICBwcm9qZWN0SWQ6IFwiZ3RuNGk2YzBcIixcclxuICAgIGRhdGFzZXQ6ICdwcm9kdWN0aW9uJyxcclxuICAgIGFwaVZlcnNpb246ICcyMDIzLTAxLTAzJyxcclxuICAgIHVzZUNkbjogdHJ1ZSxcclxuICAgIHRva2VuOiBcInNrVjV2WFFwalc1SGRaRVAyWjNCc3BtM0tUSmJYaVlEMmRDWGYxM0dyNU5zTmdjOTBHOEJmdklMa3dLUExMcVppMTlUSTVRUUpsaGNxN2tQUWprU2I4SVFpeUYzeURzU0ZCSVlEdTVLNTd4cU5QSU8xYnFKVXNUR1ZvWVNiVnFtVVB3NDVpcFVSS1JBc0t3MWNtSmVQRDlDZG1idXc5ZENwVkU4TGpUQVRDdjl1Z1RUdjFaVVwiXHJcbn0pO1xyXG5cclxuY29uc3QgYnVpbGRlciA9IEltYWdlVXJsQnVpbGRlcihjbGllbnQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVybEZvciA9IChzb3VyY2UpID0+IGJ1aWxkZXIuaW1hZ2Uoc291cmNlKTsiXSwibmFtZXMiOlsic2FuaXR5Q2xpZW50IiwiSW1hZ2VVcmxCdWlsZGVyIiwiY2xpZW50IiwicHJvamVjdElkIiwiZGF0YXNldCIsImFwaVZlcnNpb24iLCJ1c2VDZG4iLCJ0b2tlbiIsImJ1aWxkZXIiLCJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/client.js\n");

/***/ }),

/***/ "(api)/./pages/api/order.js":
/*!****************************!*\
  !*** ./pages/api/order.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/client */ \"(api)/./lib/client.js\");\n\nasync function handler(req, res) {\n    switch(req.method){\n        case \"POST\":\n            const newOrder = await JSON.parse(req.body);\n            const orderedPizzas = newOrder.pizzas.map((pizza, i)=>{\n                return {\n                    _key: pizza._id + pizza.size,\n                    name: pizza.name,\n                    quantity: pizza.quantity,\n                    size: pizza.size\n                };\n            });\n            try {\n                const data = await _lib_client__WEBPACK_IMPORTED_MODULE_0__.client.create({\n                    _type: \"order\",\n                    name: newOrder.name,\n                    address: newOrder.address,\n                    phone: newOrder.phone,\n                    total: newOrder.total,\n                    method: newOrder.method,\n                    pizzas: orderedPizzas,\n                    status: 1\n                });\n                return res.status(200).json(data._id);\n            } catch (err) {\n                console.log(err);\n                return res.status(500).json({\n                    error: err\n                });\n            }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvb3JkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMEM7QUFFM0IsZUFBZUMsUUFBU0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDN0MsT0FBUUQsSUFBSUUsTUFBTTtRQUNkLEtBQUs7WUFDRCxNQUFNQyxXQUFXLE1BQU1DLEtBQUtDLEtBQUssQ0FBQ0wsSUFBSU0sSUFBSTtZQUMxQyxNQUFNQyxnQkFBZ0JKLFNBQVNLLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLE9BQU9DLElBQU07Z0JBQ3BELE9BQU87b0JBQUVDLE1BQU1GLE1BQU1HLEdBQUcsR0FBR0gsTUFBTUksSUFBSTtvQkFBRUMsTUFBTUwsTUFBTUssSUFBSTtvQkFBRUMsVUFBVU4sTUFBTU0sUUFBUTtvQkFBRUYsTUFBTUosTUFBTUksSUFBSTtnQkFBQztZQUN4RztZQUNBLElBQUk7Z0JBQ0EsTUFBTUcsT0FBTyxNQUFNbkIsc0RBQWEsQ0FBQztvQkFDN0JxQixPQUFPO29CQUNQSixNQUFNWixTQUFTWSxJQUFJO29CQUNuQkssU0FBU2pCLFNBQVNpQixPQUFPO29CQUN6QkMsT0FBT2xCLFNBQVNrQixLQUFLO29CQUNyQkMsT0FBT25CLFNBQVNtQixLQUFLO29CQUNyQnBCLFFBQVFDLFNBQVNELE1BQU07b0JBQ3ZCTSxRQUFRRDtvQkFDUmdCLFFBQVE7Z0JBQ1o7Z0JBQ0EsT0FBT3RCLElBQUlzQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDUCxLQUFLSixHQUFHO1lBQ3hDLEVBQUUsT0FBT1ksS0FBSztnQkFDVkMsUUFBUUMsR0FBRyxDQUFDRjtnQkFDWixPQUFPeEIsSUFBSXNCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7b0JBQUVJLE9BQU9IO2dCQUFJO1lBQzdDO0lBQ1I7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGl6emFzaG9wLy4vcGFnZXMvYXBpL29yZGVyLmpzPzM5OTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xpZW50IH0gZnJvbSBcIi4uLy4uL2xpYi9jbGllbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIgKHJlcSwgcmVzKSB7XHJcbiAgICBzd2l0Y2ggKHJlcS5tZXRob2QpIHtcclxuICAgICAgICBjYXNlICdQT1NUJzpcclxuICAgICAgICAgICAgY29uc3QgbmV3T3JkZXIgPSBhd2FpdCBKU09OLnBhcnNlKHJlcS5ib2R5KTtcclxuICAgICAgICAgICAgY29uc3Qgb3JkZXJlZFBpenphcyA9IG5ld09yZGVyLnBpenphcy5tYXAoKHBpenphLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBfa2V5OiBwaXp6YS5faWQgKyBwaXp6YS5zaXplLCBuYW1lOiBwaXp6YS5uYW1lLCBxdWFudGl0eTogcGl6emEucXVhbnRpdHksIHNpemU6IHBpenphLnNpemUgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBjbGllbnQuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBfdHlwZTogJ29yZGVyJyxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuZXdPcmRlci5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IG5ld09yZGVyLmFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgcGhvbmU6IG5ld09yZGVyLnBob25lLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsOiBuZXdPcmRlci50b3RhbCxcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IG5ld09yZGVyLm1ldGhvZCxcclxuICAgICAgICAgICAgICAgICAgICBwaXp6YXM6IG9yZGVyZWRQaXp6YXMsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAxXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhLl9pZCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBlcnIgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbImNsaWVudCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJuZXdPcmRlciIsIkpTT04iLCJwYXJzZSIsImJvZHkiLCJvcmRlcmVkUGl6emFzIiwicGl6emFzIiwibWFwIiwicGl6emEiLCJpIiwiX2tleSIsIl9pZCIsInNpemUiLCJuYW1lIiwicXVhbnRpdHkiLCJkYXRhIiwiY3JlYXRlIiwiX3R5cGUiLCJhZGRyZXNzIiwicGhvbmUiLCJ0b3RhbCIsInN0YXR1cyIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/order.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/order.js"));
module.exports = __webpack_exports__;

})();