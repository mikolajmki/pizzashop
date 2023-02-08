import { Modal, useMantineTheme } from "@mantine/core";
import css from '../styles/OrderModal.module.css';
import React, { useState } from "react";
import { createOrder } from '../lib/orderHandler';
import { toast } from "react-hot-toast";
import { useStore } from '../store/store';
import { useRouter } from "next/router";

export default function OrderModal(props) {
    const theme = useMantineTheme();
    const router = useRouter();
    const total = typeof window !== 'undefined' && localStorage.getItem('total');
    const clearCart = useStore((state) => state.clearCart);
    const pizzas = useStore((state) => state.cart.pizzas);
    const [formData, setFormData] = useState(null);

    const handleInput = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        const id = await createOrder({ ...formData, pizzas: pizzas, total: total, method: props.paymentMethod });
        
        console.log('Order placed');
        console.log(id);
        
        toast.success('Order placed!');
        clearCart();
        
        { typeof window !== 'undefined' && localStorage.removeItem('total') }
        { typeof window !== 'undefined' && localStorage.setItem('order', id) }
        
        router.push(`/order/${id}`);

        props.setOpened(null);
    }

    return (
        <Modal
        overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayBlur={3}
        opened={props.opened}
        onClose={() => props.setOpened(null)}
        >
        { props.paymentMethod === 0 ? 'Payment on delivery' : 'Delivery info:' }
        <form onSubmit={handleSubmit} className={css.formContainer}>
            <input type="text" name="name" onChange={handleInput} required placeholder="Name" />
            <input type="text" name="phone" onChange={handleInput} required placeholder="Phone number" />
            <textarea name="address" onChange={handleInput} rows={3} required placeholder="Address"/>
            <span>The total is <span>${total}</span></span>
            <button type="submit" className="btn">Place order</button>
        </form>
      </Modal>
    )
}