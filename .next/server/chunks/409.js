exports.id = 409;
exports.ids = [409];
exports.modules = {

/***/ 3219:
/***/ ((module) => {

// Exports
module.exports = {
	"formContainer": "OrderModal_formContainer__bjD_3"
};


/***/ }),

/***/ 409:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ OrderModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2247);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_OrderModal_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3219);
/* harmony import */ var _styles_OrderModal_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_OrderModal_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_orderHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8777);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6201);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1526);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_3__, _store_store__WEBPACK_IMPORTED_MODULE_4__]);
([react_hot_toast__WEBPACK_IMPORTED_MODULE_3__, _store_store__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function OrderModal(props) {
    const theme = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.useMantineTheme)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const total =  false && 0;
    const clearCart = (0,_store_store__WEBPACK_IMPORTED_MODULE_4__/* .useStore */ .o)((state)=>state.clearCart);
    const pizzas = (0,_store_store__WEBPACK_IMPORTED_MODULE_4__/* .useStore */ .o)((state)=>state.cart.pizzas);
    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const handleInput = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(formData);
        const id = await (0,_lib_orderHandler__WEBPACK_IMPORTED_MODULE_6__/* .createOrder */ .L)({
            ...formData,
            pizzas: pizzas,
            total: total,
            method: props.paymentMethod
        });
        console.log("Order placed");
        console.log(id);
        react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.success("Order placed!");
        clearCart();
        {
             false && 0;
        }
        {
             false && 0;
        }
        router.push(`/order/${id}`);
        props.setOpened(null);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Modal, {
        overlayColor: theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.gray[2],
        overlayOpacity: 0.55,
        overlayBlur: 3,
        opened: props.opened,
        onClose: ()=>props.setOpened(null),
        children: [
            props.paymentMethod === 0 ? "Payment on delivery" : "Delivery info:",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleSubmit,
                className: (_styles_OrderModal_module_css__WEBPACK_IMPORTED_MODULE_7___default().formContainer),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "name",
                        onChange: handleInput,
                        required: true,
                        placeholder: "Name"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "phone",
                        onChange: handleInput,
                        required: true,
                        placeholder: "Phone number"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                        name: "address",
                        onChange: handleInput,
                        rows: 3,
                        required: true,
                        placeholder: "Address"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        children: [
                            "The total is ",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                children: [
                                    "$",
                                    total
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        className: "btn",
                        children: "Place order"
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ createOrder)
/* harmony export */ });
const createOrder = async ({ name , phone , address , total , method , pizzas  })=>{
    const res = await fetch("/api/order", {
        method: "POST",
        body: JSON.stringify({
            name,
            phone,
            address,
            total: parseFloat(total),
            method,
            pizzas
        })
    });
    const id = await res.json();
    return id;
};


/***/ })

};
;