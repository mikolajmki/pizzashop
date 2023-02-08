import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_KEY);

export default async function handler(req, res) {
    if (req.method == 'POST') {
       try {
        const params = {
            submit_type: 'pay',
            mode: 'payment',
            payment_method_types: ['card'],
            line_items: req.body.map((item) => {
                const img = item.image.asset._ref;
                const newImage = img.replace(
                    'image-',
                    'https://cdn.sanity.io/images/gtn4i6c0/production/'
                ).replace('-jpg', '.jpg');

                return {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: item.name,
                            images: [newImage]
                        },
                        unit_amount: item.price * 100
                    },
                    adjustable_quantity: {
                        enabled: false
                    },
                    quantity: item.quantity
                }
            }),
            success_url: `${req.headers.origin}/success`,
            cancel_url: `${req.headers.origin}/cart`
        };

        const session = await stripe.checkout.sessions.create(params);
        console.log(session);
        return res.status(200).json(session);
       } catch (err) {
        console.log(err);
        return res.status(500).json({ error: err })
       }
    } else {
        res.setHeader('Allow', 'POST');
        return res.status(405).json({ message: "Method not allowed." });
    }
}