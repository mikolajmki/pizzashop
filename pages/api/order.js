import { client } from "../../lib/client";

export default async function handler (req, res) {
    switch (req.method) {
        case 'POST':
            const newOrder = await JSON.parse(req.body);
            const orderedPizzas = newOrder.pizzas.map((pizza, i) => {
                return { _key: pizza._id + pizza.size, name: pizza.name, quantity: pizza.quantity, size: pizza.size }
            });
            try {
                const data = await client.create({
                    _type: 'order',
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
                return res.status(500).json({ error: err })
            }
    }
}