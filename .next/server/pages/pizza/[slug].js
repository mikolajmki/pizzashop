(() => {
var exports = {};
exports.id = 970;
exports.ids = [970];
exports.modules = {

/***/ 1425:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Pizza_container__oASHf",
	"imageWrapper": "Pizza_imageWrapper__FNdxO",
	"right": "Pizza_right__oy8kL",
	"size": "Pizza_size__jTgKh",
	"sizeVariants": "Pizza_sizeVariants__7cusA",
	"quantity": "Pizza_quantity___F6jL",
	"counter": "Pizza_counter__TaBmF",
	"btn": "Pizza_btn__LJtmP",
	"selected": "Pizza_selected__Rok_J"
};


/***/ }),

/***/ 9846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/arrowLeft.d7380a1d.png","height":20,"width":18,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAlElEQVR42k2MMQrCQBBFxyB4D72EpSCZWfBKNoInsbXwAAZs7K09hmRXjCSub9ks5MNnmDfzvyS1arNgbi6j3mrLbr2pxE+gr3Xl1c5BbcBHSXrVtgAe8BdHry4SugvLDj+pjTjBjhTTruILVPvgH3AIOdmk46mkgD3HPh+tkSSWLalHacm17ibASkbxvWdveebJLn8iMGhXwACYgQAAAABJRU5ErkJggg==","blurWidth":7,"blurHeight":8});

/***/ }),

/***/ 6336:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/arrowRight.d2ed5034.png","height":20,"width":18,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAiUlEQVR42k2PsQ0CQQwELSAgoQMCAlrB64wUiW7ohpiYlC4QPfC3n6B/WOv+xFuawLvjk854wIaOrU1TECtro+Ih3sXj0jnWmfWIBUWa34akV3Gc5peDGMUnBZUp3ojYWy70ejmJPZFS3K3ZCgYFI4HcKc7GWowp1CKuxX1nOQo71ief4vj/EpY/bk1mtWp5E8YAAAAASUVORK5CYII=","blurWidth":7,"blurHeight":8});

/***/ }),

/***/ 5390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "L": () => (/* binding */ client),
  "u": () => (/* binding */ urlFor)
});

;// CONCATENATED MODULE: external "@sanity/client"
const client_namespaceObject = require("@sanity/client");
var client_default = /*#__PURE__*/__webpack_require__.n(client_namespaceObject);
;// CONCATENATED MODULE: external "@sanity/image-url"
const image_url_namespaceObject = require("@sanity/image-url");
var image_url_default = /*#__PURE__*/__webpack_require__.n(image_url_namespaceObject);
;// CONCATENATED MODULE: ./lib/client.js


const client = client_default()({
    projectId: "gtn4i6c0",
    dataset: "production",
    apiVersion: "2023-01-03",
    useCdn: true,
    token: "skV5vXQpjW5HdZEP2Z3Bspm3KTJbXiYD2dCXf13Gr5NsNgc90G8BfvILkwKPLLqZi19TI5QQJlhcq7kPQjkSb8IQiyF3yDsSFBIYDu5K57xqNPIO1bqJUsTGVoYSbVqmUPw45ipURKRAsKw1cmJePD9Cdmbuw9dCpVE8LjTATCv9ugTTv1ZU"
});
const builder = image_url_default()(client);
const urlFor = (source)=>builder.image(source);


/***/ }),

/***/ 3247:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pizza),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Pizza_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1425);
/* harmony import */ var _styles_Pizza_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Pizza_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6770);
/* harmony import */ var _lib_client_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5390);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_arrowLeft_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9846);
/* harmony import */ var _assets_arrowRight_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6336);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_store_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1526);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layout__WEBPACK_IMPORTED_MODULE_1__, _store_store_js__WEBPACK_IMPORTED_MODULE_7__, react_hot_toast__WEBPACK_IMPORTED_MODULE_8__]);
([_components_Layout__WEBPACK_IMPORTED_MODULE_1__, _store_store_js__WEBPACK_IMPORTED_MODULE_7__, react_hot_toast__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function Pizza(props) {
    console.log(props.pizza);
    const src = (0,_lib_client_js__WEBPACK_IMPORTED_MODULE_2__/* .urlFor */ .u)(props.pizza.image).url();
    const [quant, setQuant] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(1);
    const [size, setSize] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(1);
    const handleQuant = (a)=>{
        a == 0 ? setQuant((prev)=>quant > 1 ? prev - 1 : prev) : setQuant((prev)=>quant > 0 ? prev + 1 : prev);
    };
    const addPizza = (0,_store_store_js__WEBPACK_IMPORTED_MODULE_7__/* .useStore */ .o)((state)=>state.addPizza);
    const addToCart = ()=>{
        addPizza({
            ...props.pizza,
            price: props.pizza.price[size],
            quantity: quant,
            size: size
        });
        setQuant(1);
        react_hot_toast__WEBPACK_IMPORTED_MODULE_8__["default"].success("Added to cart!");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hot_toast__WEBPACK_IMPORTED_MODULE_8__.Toaster, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Pizza_module_css__WEBPACK_IMPORTED_MODULE_9___default().container),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Pizza_module_css__WEBPACK_IMPORTED_MODULE_9___default().imageWrapper),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                            loader: ()=>src,
                            src: src,
                            alt: "",
                            layout: "fill",
                            unoptimized: true,
                            objectFit: "cover"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Pizza_module_css__WEBPACK_IMPORTED_MODULE_9___default().right),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: props.pizza.name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: props.pizza.details
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        style: {
                                            color: "var(--themeRed)"
                                        },
                                        children: "$"
                                    }),
                                    " ",
                                    props.pizza.price[size]
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Pizza_module_css__WEBPACK_IMPORTED_MODULE_9___default().size),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Size"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Pizza_module_css__WEBPACK_IMPORTED_MODULE_9___default().sizeVariants),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                onClick: ()=>setSize(0),
                                                className: size == 0 ? (_styles_Pizza_module_css__WEBPACK_IMPORTED_MODULE_9___default().selected) : "",
                                                children: "Small"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                onClick: ()=>setSize(1),
                                                className: size == 1 ? (_styles_Pizza_module_css__WEBPACK_IMPORTED_MODULE_9___default().selected) : "",
                                                children: "Medium"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                onClick: ()=>setSize(2),
                                                className: size === 2 ? (_styles_Pizza_module_css__WEBPACK_IMPORTED_MODULE_9___default().selected) : "",
                                                children: "Large"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Pizza_module_css__WEBPACK_IMPORTED_MODULE_9___default().quantity),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Quantity"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Pizza_module_css__WEBPACK_IMPORTED_MODULE_9___default().counter),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                src: _assets_arrowLeft_png__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                                                onClick: ()=>handleQuant(0),
                                                height: 20,
                                                width: 20,
                                                objectFit: "contain",
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: quant
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                src: _assets_arrowRight_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
                                                onClick: ()=>handleQuant(1),
                                                height: 20,
                                                width: 20,
                                                objectFit: "contain",
                                                alt: ""
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                onClick: addToCart,
                                className: `btn ${(_styles_Pizza_module_css__WEBPACK_IMPORTED_MODULE_9___default().btn)}`,
                                children: "Add to cart"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
;
async function getStaticPaths() {
    const paths = await _lib_client_js__WEBPACK_IMPORTED_MODULE_2__/* .client.fetch */ .L.fetch(`*[_type=="pizza" && defined(slug.current)][].slug.current`);
    return {
        paths: paths.map((slug)=>({
                params: {
                    slug
                }
            })),
        fallback: "blocking"
    };
}
;
async function getStaticProps(context) {
    /* extract if exists, or give a empty string value */ const { slug =""  } = context.params;
    const pizza = await _lib_client_js__WEBPACK_IMPORTED_MODULE_2__/* .client.fetch */ .L.fetch(`*[_type=="pizza" && slug.current=="${slug}"][0]`);
    return {
        props: {
            pizza
        }
    };
}
;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7686:
/***/ ((module) => {

"use strict";
module.exports = require("@iconscout/react-unicons");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6201:
/***/ ((module) => {

"use strict";
module.exports = import("react-hot-toast");;

/***/ }),

/***/ 6912:
/***/ ((module) => {

"use strict";
module.exports = import("zustand");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,676,61,770], () => (__webpack_exec__(3247)));
module.exports = __webpack_exports__;

})();