import React from "react";
import css from '../styles/Services.module.css';
import Image from "next/image";
import s1 from '../assets/s1.png';
import s2 from '../assets/s2.png';
import s3 from '../assets/s3.png';

export default function Services() {
    return (
        <>
            <div className={css.heading}>
                <span>WHAT WE SERVE</span>
                <span>Your favorite pizza</span>
                <span>Delivery partner</span>
            </div>
            <div className={css.services}>
                <div className={css.feature}>
                    <div className={css.imageWrapper}>
                        <Image src={s1} alt="" objectFit="cover"/>
                    </div>
                    <span>Easy to order</span>
                    <span>You only need few steps</span>
                </div>
                <div className={css.feature}>
                    <div className={css.imageWrapper}>
                        <Image src={s2} alt="" objectFit="cover"/>
                    </div>
                    <span>Fast delivery</span>
                    <span>Guaranteed 30 minutes delivery</span>
                </div>
                <div className={css.feature}>
                    <div className={css.imageWrapper}>
                        <Image src={s3} alt="" objectFit="cover"/>
                    </div>
                    <span>All over the city</span>
                    <span>No matter where you are - we will get there!</span>
                </div>
            </div>
        </>
    )
}