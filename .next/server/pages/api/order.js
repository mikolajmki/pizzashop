"use strict";
(() => {
var exports = {};
exports.id = 626;
exports.ids = [626];
exports.modules = {

/***/ 3130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
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

;// CONCATENATED MODULE: ./pages/api/order.js

async function handler(req, res) {
    switch(req.method){
        case "POST":
            const newOrder = await JSON.parse(req.body);
            const orderedPizzas = newOrder.pizzas.map((pizza, i)=>{
                return {
                    _key: pizza._id + pizza.size,
                    name: pizza.name,
                    quantity: pizza.quantity,
                    size: pizza.size
                };
            });
            try {
                const data = await client.create({
                    _type: "order",
                    name: newOrder.name,
                    address: newOrder.address,
                    phone: newOrder.phone,
                    total: newOrder.total,
                    method: newOrder.method,
                    pizzas: orderedPizzas,
                    status: 1
                });
                return res.status(200).json(data._id);
            } catch (err) {
                console.log(err);
                return res.status(500).json({
                    error: err
                });
            }
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3130));
module.exports = __webpack_exports__;

})();