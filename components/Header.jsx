import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from '../assets/Logo.png'
import { UilShoppingBag, UilReceipt } from '@iconscout/react-unicons';
import Link from "next/link";
import css from '../styles/Header.module.css';
import { useStore } from "../store/store";

export default function Header() {
    const [order, setOrder] = useState(null);

    useEffect(() => {
        setOrder(localStorage.getItem('order'));
    }, [])
    const state = useStore((state) => state);
    console.log(state);
    const items = useStore((state) => state.cart.pizzas.length);
    return (
        <div className={css.header}>
            <div className={css.logo}>
                <Image src={Logo} alt="" width={50} height={50}/>
                <span>Salasa</span>
            </div>
            <ul className={css.menu}>
                <Link href={'/'}><li>Home</li></Link>
                <Link href={'/'}><li>Menu</li></Link>
                <Link href={'/'}><li>Contact</li></Link>
            </ul>
            <div className={css.rightSide}>
                <Link href={'/cart'}>
                    <div className={css.cart}>
                        <UilShoppingBag size={35} color="#2e2e2e"/>
                        {items > 0 ? <div className={css.badge}>{items}</div> : ''}
                    </div>
                </Link>
                { order && (
                    <Link href={`/order/${order}`}>
                        <div className={css.cart}>
                            <UilReceipt size={35} color={'#2e2e2e'}/>
                            { order != '' && (
                                <div className={css.badge}>1</div>
                            ) }
                        </div>
                    </Link>
                ) }
            </div>
        </div>
    )
};