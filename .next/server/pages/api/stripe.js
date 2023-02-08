"use strict";
(() => {
var exports = {};
exports.id = 475;
exports.ids = [475];
exports.modules = {

/***/ 5948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "stripe"
const external_stripe_namespaceObject = require("stripe");
var external_stripe_default = /*#__PURE__*/__webpack_require__.n(external_stripe_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/stripe.js

const stripe = new (external_stripe_default())(process.env.STRIPE_KEY);
async function handler(req, res) {
    if (req.method == "POST") {
        try {
            const params = {
                submit_type: "pay",
                mode: "payment",
                payment_method_types: [
                    "card"
                ],
                line_items: req.body.map((item)=>{
                    const img = item.image.asset._ref;
                    const newImage = img.replace("image-", "https://cdn.sanity.io/images/gtn4i6c0/production/").replace("-jpg", ".jpg");
                    return {
                        price_data: {
                            currency: "usd",
                            product_data: {
                                name: item.name,
                                images: [
                                    newImage
                                ]
                            },
                            unit_amount: item.price * 100
                        },
                        adjustable_quantity: {
                            enabled: false
                        },
                        quantity: item.quantity
                    };
                }),
                success_url: `${req.headers.origin}/success`,
                cancel_url: `${req.headers.origin}/cart`
            };
            const session = await stripe.checkout.sessions.create(params);
            console.log(session);
            return res.status(200).json(session);
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                error: err
            });
        }
    } else {
        res.setHeader("Allow", "POST");
        return res.status(405).json({
            message: "Method not allowed."
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5948));
module.exports = __webpack_exports__;

})();