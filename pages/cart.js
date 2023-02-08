import css from "../styles/Cart.module.css";
import Layout from "../components/Layout";
import { useStore } from "../store/store";
import Image from "next/image";
import { urlFor } from "../lib/client";
import { toast, Toaster } from "react-hot-toast";
import { useState } from "react";
import OrderModal from "../components/OrderModal";
import { useRouter } from "next/router";
import React from "react";

export default function Cart(props) {
    const router = useRouter();
    const cartData = useStore((state) => state.cart);
    const removePizza = useStore((state) => state.removePizza);

    const [paymentMethod, setPaymentMethod] = useState(null);

    const handleRemove = (pizza) => {
        removePizza(pizza);
        toast.success('Look at my styles.', {
            style: {
              border: '1px solid #713200',
              padding: '16px',
              color: '#713200',
            },
            iconTheme: {
              primary: '#ffffff',
              secondary: '#FFFAEE',
            },
          });
    }

    const calculateTotal = () => {
        return cartData.pizzas.reduce((a, b) => a + b.quantity * b.price, 0);
    }

    const handleOnDelivery = () => {
        setPaymentMethod(0);
        typeof window !== 'undefined' && localStorage.setItem('total', calculateTotal());
        console.log(paymentMethod);
    }

    const handleCheckout = async () => {
        typeof window !== 'undefined' && localStorage.setItem('total', calculateTotal());
        setPaymentMethod(1);
        const response = await fetch('/api/stripe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cartData.pizzas)
        });

        if (response.status === 500) return;

        const data = await response.json();
        toast.loading('Redirecting...');
        console.log(data);
        router.push(data.url);
    }

    return (
        <Layout>
            <Toaster/>
            <div className={css.container}>
                <div className={css.details}>
                    <table className={css.table}>
                        <thead>
                            <th>Pizza</th>
                            <th>Name</th>
                            <th>Size</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th></th>
                        </thead>
                        <tbody className={css.tbody}>
                            {cartData.pizzas.length > 0 && (
                                cartData.pizzas.map((pizza, index) => {
                                    const src = urlFor(pizza.image).url();
                                    return (
                                        <tr key={index}>
                                            <td>
                                                <Image
                                                src={src}
                                                loader={() => src}
                                                className={css.imageId}
                                                alt=""
                                                objectFit="cover"
                                                width={85}
                                                height={85}/>
                                            </td>
                                            <td>{pizza.name}</td>
                                            <td>{pizza.size === 0 ? 'Small' : pizza.size === 1 ? 'Medium' : 'Large'}</td>
                                            <td><span style={{ color: 'var(--themeRed)' }}>$</span> {pizza.price}</td>
                                            <td>{pizza.quantity}</td>
                                            <td><span style={{ color: 'var(--themeRed)' }}>$</span> {pizza.price * pizza.quantity}</td>
                                            <td onClick={() => removePizza(index)}>X</td>
                                        </tr>
                                    )
                                })
                            )}
                        </tbody>
                    </table>
                </div>
                <div className={css.cart}>
                    <span>Cart: </span>
                    <div className={css.cartDetails}>
                        <div>
                            <span>Items:</span>
                            <span>{cartData.pizzas.length} </span>
                        </div>
                        <div>
                            <span>Total:</span>
                            <span><span style={{ color: 'var(--themeRed)' }}>$</span> {calculateTotal()}</span>
                        </div>
                        <div>
                            <span>Delivery fee:</span>
                            <span><span style={{ color: 'var(--themeRed)' }}>$</span> 5</span>
                        </div>
                    </div>
                    <div className={css.buttons}>
                        { typeof window !== 'undefined' && !localStorage.getItem('order') ? 
                                <React.Fragment>
                                    <button className='btn' onClick={handleOnDelivery}>Pay on delivery</button>
                                    <button className='btn' onClick={handleCheckout}>Pay now</button>
                                </React.Fragment>
                        : 'You have an active order already.' }
                    </div>
                </div>
            </div>
            {paymentMethod === 0 ? 
            <OrderModal
            opened={paymentMethod === 0}
            setOpened={setPaymentMethod}
            paymentMethod={paymentMethod}/> : ''}
        </Layout>
    )
};